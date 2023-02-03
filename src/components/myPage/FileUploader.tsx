import { useRef } from "react";
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

  console.log(profileImg);

  const handleClickFileInput = () => {
    profileImgFileInput.current?.click();
  };

  const uploadProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);
      console.log(fileList[0]);
      console.log(url);

      // setProfileImg({
      //   // file: fileList[0],
      //   // thumbnail: url,
      //   // type: fileList[0].type.slice(0, 5),
      //   URL.createObjectURL(fileList[0]);
      // });

      // const formData = new FormData();
      // formData.append("files", fileList[0]);

      // axios.post("///", {
      //   //이미지파일 전송?
      //   data: formData,
      //   headers: {
      //     "Content-Type": `multipart/form-data;`,
      //   },
      // });
    }
  };

  // console.log(profileUrl);

  // const showImage = useMemo(() => {
  //   if (!profileImg && profileImg == null) {
  //     return <ProfileImg />;
  //   }
  //   return <ProfileThumbnail src={profileImg.thumbnail} alt={profileImg.type} onClick={handleClickFileInput} />;
  // }, [profileImg]);

  return (
    <FileUploadContainer>
      <ProfileThumbnail src={profileImg as string} onClick={handleClickFileInput} />
      <form>
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
