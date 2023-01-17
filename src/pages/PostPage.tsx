import { Column } from "../components/elements/Wrapper";
import { Header } from "../components/elements/Header";
import { Section } from "../components/elements/Wrapper";
import { Board } from "../components/postPage/Board";
import { CommentsList } from "../components/postPage/CommentsList";
import { useParams } from "react-router-dom";
import { IPost } from "../components/postPage/Board";
import { IComment } from "../components/postPage/Comments";
import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import post from "../data/post.json";
import postDetail from "../data/postDetail.json";

export function PostPage() {
  const { postId } = useParams();
  // const [boardData, setBoardData] = useState<IPost>();
  // const [commentData, setCommentData] = useState<IComment>();
  // setBoardData(post.data[2]);
  // setCommentData(postDetail.comments);

  const boardData = post.data[0];
  const commentData = postDetail.comments;

  console.log(post.data[2]);
  console.log(postDetail.comments);

  // const getBoardData = async () => {
  //   const { data } = await axios.get<IPost>(`http://43.200.18.111:8080/post/${postId}`);
  //   return data;
  // };

  // const [postDetails, setPostDetails] = useQuery();
  // if (postId) {
  //   console.log(postId);
  // }
  // console.log(postId ? postId : "");

  return (
    <>
      <Header />
      <Section style={{ padding: "0 340px 0 340px", display: "flex", justifyContent: "center" }}>
        {postId}
        <Column style={{ marginTop: "100px" }}>
          <Board {...post.data[2]} />
          <CommentsList {...postDetail.comments} />
        </Column>
      </Section>
    </>
  );
}
