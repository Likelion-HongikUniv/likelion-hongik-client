import { useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { userState } from "./../../states/index";
import { getPresignedUrl, uploadFile } from "../../api/uploadImage";
import emoji_lion from "./../images/emoji_lion_24x24.png";
import { editProfileImage } from "../../api/edit";

export interface UploadImage {
  file: File;
  thumbnail: string;
  type: string;
}

export function FileUploader() {
  const profileImgFileInput = useRef<HTMLInputElement>(null);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const token = userInfo.accessToken;

  const handleClickFileInput = () => {
    profileImgFileInput.current?.click();
  };

  const uploadProfile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList: any = e.target.files;
    const file = fileList[0];

    if (file) {
      const url = await getPresignedUrl({
        path: "profileImage",
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
          setUserInfo({ ...userInfo, profileImageSrc: slicedUrl });
          editProfileImage({
            token: token,
            slicedUrl: slicedUrl,
          });
          return;
        }
      }
    }
  };

  return (
    <FileUploadContainer>
      <ProfileThumbnail
        src={userInfo.profileImageSrc || emoji_lion}
        onClick={handleClickFileInput}
        className="profile-img"
      />
      <form encType="multipart/form-data">
        <FileInput type="file" accept="image/*" ref={profileImgFileInput} onChange={uploadProfile} />
      </form>
    </FileUploadContainer>
  );
}

const FileUploadContainer = styled.div`
  width: 105px;
  height: 105px;
  display: flex;
  @media (max-width: 767px) {
    //모바일
    width: 60px;
    height: 60px;
  }
  :hover .profile-img {
    display: block;
    filter: brightness(60%);
  }
`;

const FileInput = styled.input`
  display: none;
`;

const ProfileThumbnail = styled.img`
  border-radius: 50%;
  width: 105px;
  height: 105px;
  background-color: #d9d9d9;
  border: none;
  cursor: pointer;
  object-fit: cover;

  @media (max-width: 767px) {
    //모바일
    width: 60px;
    height: 60px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;
