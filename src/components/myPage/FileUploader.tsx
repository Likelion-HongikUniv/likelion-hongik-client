import { useRef, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { profileImgState } from "./../../states/index";
import axios from "axios";

export interface UploadImage {
  file: File;
  thumbnail: string;
  type: string;
}

export function FileUploader() {
  const profileImgFileInput = useRef<HTMLInputElement>(null);
  const [profileImg, setProfileImg] = useRecoilState(profileImgState);
  const token = localStorage.getItem("token");

  const handleClickFileInput = () => {
    profileImgFileInput.current?.click();
  };

  const uploadProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList[0]) {
      const presignedUrl = async () => {
        await axios
          .get(`http://13.125.72.138:8080/pre-signed-url/profileImage`, {
            headers: {
              JWT: token,
            },
          })
          .then((response) => {
            console.log("presigned url에서 get 해온 url은 ", response.data);
            const presignedUrlResult = response.data;
            uploadImageToS3(presignedUrlResult, fileList[0]);
          })
          .catch((error) => console.log(error));
      };
      presignedUrl();

      const uploadImageToS3 = async (url: string, file: File) => {
        await axios
          .put(url, file, {
            headers: {
              "Content-Type": file.type,
            },
          })
          .then((response) => {
            console.log(response);
            let resultUrlParse = "";
            if (url.includes("?")) {
              resultUrlParse = url.slice(0, url.indexOf("?"));
            }
            console.log("url 파싱한 결과: ", resultUrlParse);
            setProfileImg(resultUrlParse);
          })
          .catch((error) => console.error(error));
      };
    }
  };

  return (
    <FileUploadContainer>
      <ProfileThumbnail src={profileImg} onClick={handleClickFileInput} />
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
  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
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
