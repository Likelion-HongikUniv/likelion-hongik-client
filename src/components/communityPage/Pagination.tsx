import styled from "styled-components";

export function Pagination() {
  const activeButton = {
    background: "#ED7F30",
    border: "none",
  };
  return (
    <PageWrapper>
      <PageBtn type="button" style={activeButton}>
        1
      </PageBtn>
      <PageBtn type="button">2</PageBtn>
      <PageBtn type="button">3</PageBtn>
      <PageBtn type="button">4</PageBtn>
      <PageBtn type="button">5</PageBtn>
      <PageBtn type="button">...</PageBtn>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const PageBtn = styled.button`
  width: 33px;
  height: 33px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  color: #ffffff;
`;
