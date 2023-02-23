import { Column } from "../components/elements/Wrapper";
import { Header } from "../components/elements/Header";
import { Section } from "../components/elements/Wrapper";
import { Board } from "../components/postPage/Board";
import { CommentsList } from "../components/postPage/CommentsList";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useMediaQuery from "../hooks/useMediaQuery";
import { useGetPostDetail } from "../api/useGetPostDetail";

export function PostPage() {
  const isPC = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width : 768px)");
  const { id } = useParams<{ id?: string }>();
  const postIdToNumber = Number(id);
  const { board, status } = useGetPostDetail(postIdToNumber);

  return (
    <>
      <Header />
      {isPC && board && (
        <Section style={{ padding: "0 340px", display: "flex", justifyContent: "center" }}>
          <Column style={{ marginTop: "100px" }}>
            <Board {...board} />
            <CommentsList {...board.comments} />
          </Column>
        </Section>
      )}
      {isTablet && board && status === "success" && (
        <Section style={{ padding: "0 40px", display: "flex", justifyContent: "center" }}>
          <Column style={{ marginTop: "100px" }}>
            <Board {...board} />
            <Hairline />
            <CommentsList {...board.comments} />
          </Column>
        </Section>
      )}
      {isMobile && board && status === "success" && (
        <Section style={{ position: "relative", padding: "0 20px", display: "flex", justifyContent: "center" }}>
          <Column style={{ marginTop: "100px" }}>
            <Board {...board} />
            <Hairline />
            <CommentsList {...board.comments} />
          </Column>
        </Section>
      )}
    </>
  );
}

const Hairline = styled.div`
  margin-top: 108px;
  margin-bottom: 20px;
  border: 1px solid rgb(255, 255, 255, 0.3);
`;
