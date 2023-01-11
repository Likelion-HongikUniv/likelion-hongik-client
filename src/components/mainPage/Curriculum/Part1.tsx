import React from "react";
import styled from "styled-components";

const Part1 = () => {
  return (
    <Box>
      <PartName>기획·디자인 타임라인</PartName>
      <BarContainer>
        <Dot1>
          <Date>2022.02.21 - 03.02</Date>
          <Text>멋사 11기 지원 기간</Text>
        </Dot1>
        <Dot2>
          <Date>2022.02.21 - 03.02</Date>
          <Text>기획디자인</Text>
        </Dot2>
        <Dot3>
          <Date>2022.02.21 - 03.02</Date>
          <Text>기획디자인</Text>
        </Dot3>
        <Dot4>
          <Date>2022.02.21 - 03.02</Date>
          <Text>기획디자인</Text>
        </Dot4>
        <Dot5>
          <Date>2022.02.21 - 03.02</Date>
          <Text>기획디자인</Text>
        </Dot5>
      </BarContainer>
    </Box>
  );
};

const Box = styled.div`
  height: 330px;
  width: 80vw;
  margin-top: 50px;
`;

const PartName = styled.h2`
  color: white;
  font-size: 28px;
  margin-bottom: 40px;
`;

const BarContainer = styled.div`
  width: 1210px;
  height: 20px;
  background: rgba(51, 51, 51, 0.8);
  border-radius: 30px;
  position: relative;
`;

const Dot1 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0px;
  border-radius: 50px;
  background: #d9d9d9;
`;

const Dot2 = styled(Dot1)`
  position: absolute;
  left: 250px;
`;

const Dot3 = styled(Dot2)`
  left: 500px;
`;

const Dot4 = styled(Dot3)`
  left: 750px;
`;

const Dot5 = styled(Dot4)`
  left: 1000px;
`;

const Date = styled.div`
  margin-top: 40px;
  width: 149px;
  height: 19px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

const Text = styled.div`
  width: 182.68px;
  height: 29px;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin-top: 16px;
`;

export default Part1;
