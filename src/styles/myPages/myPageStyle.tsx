import styled from "styled-components";

export const MyPostPageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
  @media (max-width: 1024px) {
    width: 100vw;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
`;

export const MyPostBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 140px;
  margin-left: 120px;
  @media (max-width: 768px) {
    width: 100vw;
    margin-top: 0px;
    margin-left: 0px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-left: 0px;
    margin-top: 20px;
    margin-left: 40px;
    margin-right: 40px;
    width: 688px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -0.32px;
  color: #ffffff;
  opacity: 0.98;
  /* width: 925px; */
`;

export const PostItemContainer = styled.div`
  /* width: 800px; */
  height: 1330px;
  @media (max-width: 768px) {
    margin-bottom: 50px;
    width: 100vw;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 688px;
  }
`;

