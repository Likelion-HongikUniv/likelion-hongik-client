import React from "react";
import styled from "styled-components";

const Part1 = () => {
  return (
    <Box>
      <PartName>기획·디자인 타임라인</PartName>
      <div></div>
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
`;

export default Part1;
