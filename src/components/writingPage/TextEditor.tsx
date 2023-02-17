import React, { useEffect, useRef, useState } from "react";
import { Editor, Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import styled from "styled-components";
import { Column, Row } from "../elements/Wrapper";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  isCancelButtonClickedState,
  isThumbnailSetButtonClickedState,
  postThumbnailUrlState,
} from "../../states/index";
import axios from "axios";
import { postPost } from "../../api/post";
import { useNavigate } from "react-router-dom";

interface EditorProps {
  category?: string;
  title?: string;
}
type HookCallback = (url: string, text?: string) => void;

export function TextEditor({ category, title }: EditorProps) {
  const editorRef = useRef<Editor>(null);
  const setIsCancelButtonClicked = useSetRecoilState(isCancelButtonClickedState);
  const setIsThumbnailSetButtonClicked = useSetRecoilState(isThumbnailSetButtonClickedState);
  const thumbnailImageUrl = useRecoilValue(postThumbnailUrlState);
  const token = localStorage.getItem("token");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const onUploadImage = async (file: any, callback: HookCallback) => {
    const url = await axios
      .get("http://13.125.72.138:8080/pre-signed-url/postImage", { headers: { JWT: token } })
      .then((res) => {
        return res.data;
      });
    const slicedUrl = url.slice(0, url.indexOf("?x-amz"));

    if (url) {
      const statusCode = await axios.put(url, file).then((res) => {
        return res.status;
      });
      if (statusCode === 200) {
        setImageUrl(slicedUrl);
        callback(slicedUrl, "이미지");
      }
    }
  };

  const onClickRegisterButton = async () => {
    const editorContent = editorRef.current?.getInstance().getHTML();
    console.log(editorContent);
    console.log(title);

    if (token && title && editorContent) {
      await axios
        .post(
          `http://13.125.72.138:8080/community/posts/BOARD/NOTICE`,
          { title: title, body: editorContent, thumbnailImageUrl: thumbnailImageUrl },
          { headers: { JWT: token } },
        )
        .then((res) => {
          console.log(res);

          navigate(`/community/post/${res.data.id}`);
        });
      // const res = await postPost(token, {
      //   title: title,
      //   editorContent: editorContent,
      //   thumbnailImageUrl: thumbnailImageUrl,
      // });
      // console.log(res);
    }
  };

  const onClickCancelButton = () => {
    setIsCancelButtonClicked(true);
  };

  const onClickThumbnailSetButton = () => {
    setIsThumbnailSetButtonClicked(true);
  };

  return (
    <Column width="80vw" justifyContent="center" alignItems="center" style={{ paddingBottom: "100px" }}>
      <EditorWrapper>
        <Editor
          ref={editorRef}
          placeholder="내용을 입력해주세요."
          previewStyle="vertical" // 미리보기 스타일 지정
          height="500px" // 에디터 창 높이
          // initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
          toolbarItems={[
            ["heading", "bold", "italic", "strike"],
            ["hr", "quote"],
            ["ul", "ol", "task", "indent", "outdent"],
            ["table", "image", "link"],
            ["code", "codeblock"],
            ["scrollSync"],
          ]}
          autofocus
          theme={"dark"}
          hideModeSwitch={true}
          hooks={{
            addImageBlobHook: onUploadImage,
          }}
        />
      </EditorWrapper>
      <Row marginTop="24px" width="100%" justifyContent="space-between">
        <CancelButton onClick={onClickThumbnailSetButton}>썸네일 설정</CancelButton>
        <Row width="100%" justifyContent="flex-end" gap="12px">
          <CancelButton onClick={onClickCancelButton}>취소</CancelButton>
          <SaveButton onClick={onClickRegisterButton}>등록</SaveButton>
        </Row>
      </Row>
    </Column>
  );
}

const EditorWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  background-color: black;
  border-radius: 4px;

  .toastui-editor-contents {
    font-size: 15px;
  }
  .ProseMirror {
    font-size: 15px;
  }

  .toastui-editor-toolbar {
    height: 45px;
  }
`;

const SaveButton = styled.button`
  width: 128px;
  height: 52px;
  font-size: 20px;
  line-height: 24.2px;
  font-weight: 600;
  border-radius: 8px;
  background-color: #ed7f30;
  color: black;
`;

const CancelButton = styled.button`
  width: 128px;
  height: 52px;
  font-size: 20px;
  line-height: 24.2px;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  color: white;
`;
