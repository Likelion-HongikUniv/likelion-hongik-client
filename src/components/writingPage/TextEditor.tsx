import React, { useEffect, useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import styled from "styled-components";

export function TextEditor() {
  const editorRef = useRef(null);

  useEffect(() => {
    const test = localStorage.getItem("test");
    console.dir(test);
    // if (test) {
    //   editorRef.current.getInstance().setMarkdown(test);
    // }
  }, []);

  return (
    <EditorWrapper>
      <Editor
        ref={editorRef}
        // initialValue={}
        // initialValue="hello react editor world!"
        placeholder="내용을 입력해주세요."
        previewStyle="vertical" // 미리보기 스타일 지정
        height="520px" // 에디터 창 높이
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
      ></Editor>
    </EditorWrapper>
  );
}

const EditorWrapper = styled.div`
  width: 90%;
  margin-top: 20px;
  background-color: aliceblue;
  border-radius: 4px;

  .toastui-editor-toolbar {
    height: 45px;
  }
`;
