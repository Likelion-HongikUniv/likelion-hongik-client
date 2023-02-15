import styled from "styled-components";

export const Box = styled.div`
  height: 330px;
  width: 80vw;
  margin-top: 50px;
  @media (max-width: 768px) {
    height: 500px;
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    margin: auto;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 688px;
    margin: 40px auto;
  }
`;

export const PartName = styled.h2`
  color: white;
  font-size: 28px;
  margin-bottom: 40px;
  text-align: left;
  width: 250px;
  @media (max-width: 768px) {
    margin-left: 20px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100vw;
  }
`;

export const BarContainer = styled.div`
  width: 1240px;
  height: 20px;
  background: rgba(51, 51, 51, 0.8);
  border-radius: 30px;
  position: relative;
  @media (max-width: 768px) {
    width: 20px;
    height: 326px;
    margin-left: 50px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 688px;
    height: 20px;
  }
`;

export const Dot1 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0px;
  border-radius: 50px;
  background: #d9d9d9;
`;

export const Dot2 = styled(Dot1)`
  position: absolute;
  left: 250px;
  @media (max-width: 768px) {
    top: 70px;
    left: 0px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    left: 150px;
  }
`;

export const Dot3 = styled(Dot2)`
  position: absolute;
  left: 500px;
  @media (max-width: 768px) {
    top: 140px;
    left: 0px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    left: 300px;
  }
`;

export const Dot4 = styled(Dot3)`
  position: absolute;
  left: 750px;
  @media (max-width: 768px) {
    top: 210px;
    left: 0px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    left: 430px;
  }
`;

export const Dot5 = styled(Dot4)`
  position: absolute;
  left: 1000px;
  @media (max-width: 768px) {
    top: 280px;
    left: 0px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    left: 570px;
  }
`;

export const Date = styled.div`
  margin-top: 40px;
  width: 149px;
  height: 19px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  @media (max-width: 768px) {
    margin-top: 0px;
    margin-left: 40px;
    font-size: 12px;
    line-height: 14px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const Text = styled.div`
  width: 182.68px;
  height: 29px;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin-top: 16px;
  @media (max-width: 768px) {
    margin-top: 4px;
    margin-left: 40px;
    font-size: 20px;
    line-height: 24px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
    margin-top: 4px;
  }
`;
