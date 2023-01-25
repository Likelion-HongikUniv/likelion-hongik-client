import { Column } from "../components/elements/Wrapper";
import { Header } from "../components/elements/Header";
import { Section } from "../components/elements/Wrapper";
import { Board } from "../components/postPage/Board";
import { CommentsList } from "../components/postPage/CommentsList";
import { useSearchParams } from "react-router-dom";  
import { IComment, IBoard } from "../interfaces/comments";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import getPostDetail from "../api/getPostDetail"; 
import { commentsListState, boardState } from "../states/atoms";
import postDetail from "../data/postDetail.json";;


export function PostPage() {
  const [board, setBoardData] = useRecoilState<any>(boardState);
  const [comments, setCommentsData] = useRecoilState<IComment[]>(commentsListState);

  let postId : any = 23;
  const [idParams, setIdParams] = useSearchParams();
  if (idParams.get("id") !== null){
    postId = idParams.get("id");
  }

  setBoardData(postDetail);
  console.log(postId);
  console.log(board);
  console.log(comments);

  

  useEffect(() => { 
    getPostDetail(postId); 
  }, []);


  return (
    <>
      <Header />
      <Section style={{ padding: "0 340px 0 340px", display: "flex", justifyContent: "center" }}>
        <Column style={{ marginTop: "100px" }}>
          <Board {...board} />
          <CommentsList {...comments} />
        </Column>
      </Section>
    </>
  );
}
