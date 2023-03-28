//SocialLogin.tsx

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { WHITE_1 } from "../../styles/theme";
import { KakaoIcon } from "../icons/SocialIcon/KakaoIcon";
import { NaverIcon } from "../icons/SocialIcon/NaverIcon";
import { GoogleIcon } from "../icons/SocialIcon/GoogleIcon";

export function SocialLogin() {
  const baseUrl = "https://api.likelionhongik.com/oauth2/authorization";
  const googleLogin = () => {
    window.open(`${baseUrl}/google`, "_self");
  };
  const naverLogin = () => {
    window.open(`${baseUrl}/naver`, "_self");
  };

  const kakaoLogin = () => {
    window.open(`${baseUrl}/kakao`, "_self");
  };

  const githubLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.open(`${baseUrl}/github`, "_self");
  };

  return (
    <ForDiv>
      <WelcomeText>
        멋쟁이 사자처럼에
        <br />
        오신 걸 환영합니다
      </WelcomeText>
      <SmallText>로그인 후 이용할 수 있어요.</SmallText>
      <div>
        {/* <SocialBtn style={{ background: "#1FC83A" }} onClick={naverLogin}>
          <NaverIcon />
          <Social style={{ marginLeft: "94px" }}>네이버 로그인</Social>
        </SocialBtn> */}
        <SocialBtn style={{ background: "#EFDB30" }} onClick={kakaoLogin}>
          <KakaoIcon />
          <Social style={{ marginLeft: "84px ", color: "#000000" }}>카카오로 로그인</Social>
        </SocialBtn>
        <SocialBtn onClick={googleLogin} style={{ background: "#FFFFFF" }}>
          <GoogleIcon />
          <Social style={{ marginLeft: "74px", color: "#000000" }}>Sign with Google</Social>
        </SocialBtn>
        {/* <SocialBtn style={{ marginTop: "86px" }} onClick={githubLogin}> */}
        <SocialBtn onClick={githubLogin}>
          <FontAwesomeIcon icon={faGithub} />
          <Social>Github으로 계속하기</Social>
        </SocialBtn>
      </div>
    </ForDiv>
  );
}

const ForDiv = styled.div`
  height: 100%;
  padding-top: 180px;
`;

const WelcomeText = styled.div`
  font-weight: 800;
  font-size: 32px;
  line-height: 42px;
`;

const SmallText = styled.div`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: #dfdfdf;
`;

const SocialBtn = styled.button`
  width: 350px;
  height: 48px;
  border-radius: 8px;
  background-color: #222222;
  margin-top: 12px;
  align-items: center;
  display: flex;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.6px;
  padding: 16px;
  color: ${WHITE_1};
`;

const Social = styled.div`
  margin-left: 66px;
`;
