import { useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { profileState } from "./../../states/index";

export interface UploadImage {
  file: File;
  thumbnail: string;
  type: string;
}

export function FileUploader() {
  const profileImgFileInput = useRef<HTMLInputElement>(null);
  const [profileImg, setProfileImg] = useRecoilState(profileState);

  const handleClickFileInput = () => {
    profileImgFileInput.current?.click();
  };

  const uploadProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);

      setProfileImg({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
    }
  };

  // const showImage = useMemo(() => {
  //   if (!profileImg && profileImg == null) {
  //     return <ProfileImg />;
  //   }
  //   return <ProfileThumbnail src={profileImg.thumbnail} alt={profileImg.type} onClick={handleClickFileInput} />;
  // }, [profileImg]);

  return (
    <FileUploadContainer>
      <ProfileThumbnail src={profileImg?.thumbnail} onClick={handleClickFileInput} />
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
`;
