import { useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getPresignedUrl, uploadFile } from "../../api/uploadImage";
import { isThumbnailSetButtonClickedState, postThumbnailUrlState } from "../../states";
import { Column, Row } from "../elements/Wrapper";
import { ImageIcon } from "../icons/ImageIcon";

export function ThumbnailUploadPopup() {
  const setIsThumbnailSetButtonClicked = useSetRecoilState(isThumbnailSetButtonClickedState);
  const token: any = localStorage.getItem("token");
  const [thumbnailUrl, setThumbnailUrl] = useRecoilState(postThumbnailUrlState);
  const thumbnailImgFileInput = useRef<HTMLInputElement>(null);

  const onUploadThumbnailImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList: any = e.target.files;
    const file = fileList[0];

    if (file) {
      const url = await getPresignedUrl({
        path: "postImage",
        token: token,
      });
      const slicedUrl = url.slice(0, url.indexOf("?x-amz"));

      if (url) {
        // presigned url에 파일 업로드 후 url 저장.
        const statusCode = await uploadFile({
          url: url,
          file: file,
        });
        if (statusCode === 200) {
          setThumbnailUrl(slicedUrl);
        }
        return;
      }
    }
  };

  const handleClickFileInput = () => {
    thumbnailImgFileInput.current?.click();
  };

  return (
    <>
      <ConfirmationPopUpWrapper>
        <Column gap="16px" justifyContent="flex-start">
          <div style={{ color: "white", fontSize: "24px", fontWeight: "700" }}>썸네일 업로드</div>
          <Column width="100%" marginTop="25px" alignItems="center">
            <input
              type="file"
              id="img-upload"
              style={{ display: "none" }}
              onChange={onUploadThumbnailImage}
              ref={thumbnailImgFileInput}
              accept="image/x-png,image/gif,image/jpeg"
              onClick={handleClickFileInput}
            />
            {thumbnailUrl === null ? (
              <ImageArea>
                <ImageIcon htmlFor="img-upload" />
              </ImageArea>
            ) : (
              <img alt="thumbnail" src={thumbnailUrl} width={209} height={209} onClick={handleClickFileInput} />
            )}
            <TextArea>썸네일 이미지 미설정 시 썸네일 자동설정되지 않습니다.</TextArea>
            <Row gap="12px" style={{ height: "auto" }}>
              <CancelButton
                onClick={() => {
                  setIsThumbnailSetButtonClicked(false);
                }}
              >
                취소
              </CancelButton>
              <UploadButton
                onClick={() => {
                  alert("🦁 업로드가 완료되었습니다 🦁");
                  setIsThumbnailSetButtonClicked(false);
                }}
              >
                등록
              </UploadButton>
              <DeleteButton
                onClick={() => {
                  alert("🦁 썸네일이 삭제되었습니다 🦁");
                  setIsThumbnailSetButtonClicked(false);
                  setThumbnailUrl(null);
                }}
              >
                삭제
              </DeleteButton>
            </Row>
          </Column>
        </Column>
      </ConfirmationPopUpWrapper>
      <BackDrop />
    </>
  );
}

const BackDrop = styled.div`
  z-index: 15000;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(14, 14, 14, 0.5);
`;

const ConfirmationPopUpWrapper = styled.div`
  z-index: 16000;
  background-color: #222222;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  padding: 24px;
  border-radius: 12px;
  width: 420px;
  height: 420px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TextArea = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 34px;
  color: rgba(255, 255, 255, 0.6);
`;

const ImageArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 209px;
  height: 209px;
  background: #333333;
  border-radius: 8px;
`;

const CancelButton = styled.button`
  width: 72px;
  height: 52px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 8px;
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
  font-size: 20px;
`;

const UploadButton = styled.button`
  width: 72px;
  height: 52px;
  background-color: #ed7f30;
  border-radius: 8px;
  color: black;
  font-weight: 500;
  font-size: 20px;
`;

const DeleteButton = styled.button`
  width: 72px;
  height: 52px;
  background-color: #ed7f30;
  border-radius: 8px;
  color: black;
  font-weight: 500;
  font-size: 20px;
`;
