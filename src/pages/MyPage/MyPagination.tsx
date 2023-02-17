import styled from "styled-components";
import React from "react";
import { useRecoilState } from "recoil";
import { currPageState } from "../../states/index";

interface ItotalPage {
  totalPages: number;
}

const MyPagination = ({ totalPages }: ItotalPage) => {
  const [currPage, setCurrPage] = useRecoilState(currPageState);

  const activeButton = {
    background: "#ED7F30",
    border: "none",
  };

  const onHandlePrev = () => {
    if (currPage === 1) setCurrPage(1);
    else setCurrPage(currPage - 1);
  };

  const onHandleNext = () => {
    if (currPage === totalPages) setCurrPage(totalPages);
    else setCurrPage(currPage + 1);
  };

  return (
    <PageSection>
      <Button onClick={onHandlePrev} style={{ marginRight: "10px" }}>
        &lt;
      </Button>
      {[...Array(totalPages)].map((_, i) => {
        return (
          <Button key={i + 1} onClick={() => setCurrPage(i + 1)} style={currPage === i + 1 ? activeButton : {}}>
            {i + 1}
          </Button>
        );
      })}
      <Button onClick={onHandleNext} style={{ marginLeft: "10px" }}>
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
  @media (max-width: 768px) {
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
