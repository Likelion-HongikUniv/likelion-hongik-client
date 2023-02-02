import styled from "styled-components";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { currPageState } from "../../states/index";

const MyPagination = () => {
  const totalPosts = 25; // 나중에 props로 받기
  const [numPages, setNumPages] = useState(Math.ceil(totalPosts / 5));
  const [currPage, setCurrPage] = useRecoilState(currPageState);

  const activeButton = {
    background: "#ED7F30",
    border: "none",
  };

  return (
    <PageSection>
      <Button onClick={() => setCurrPage(currPage - 1)} style={{ marginRight: "10px" }}>
        &lt;
      </Button>
      {[...Array(numPages)].map((_, i) => {
        return (
          <Button key={i + 1} onClick={() => setCurrPage(i + 1)} style={currPage === i + 1 ? activeButton : {}}>
            {i + 1}
          </Button>
        );
      })}
      <Button onClick={() => setCurrPage(currPage + 1)} style={{ marginLeft: "10px" }}>
        &gt;
      </Button>
    </PageSection>
  );
};

const Button = styled.button<any>`
  width: 33px;
  height: 33px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  color: #ffffff;
  @media (max-width: 390px) {
    width: 28px;
    height: 28px;
  }
`;

const PageSection = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  gap: 8px;
  width: 50vw;
  height: 50px;
`;

export default MyPagination;
