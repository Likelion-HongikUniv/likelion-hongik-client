import { userInfoState } from "../../states/user";
import { useRecoilValue } from "recoil";
export function Profile() {
  const userImg = useRecoilValue(userInfoState);

  return (
    <>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns={userImg.profileImageSrc}
        // xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <circle cx="15" cy="15" r="15" fill="#FEFEFE" />
        <path opacity="0.98" d="M4 26H26V4H4V26Z" fill="url(#pattern0)" />
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"></pattern>
          <image id="image0_279_779" width="160" height="160"></image>
        </defs>
      </svg>
    </>
  );
}
