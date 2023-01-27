import { Column } from "../components/elements/Wrapper";
import { Header } from "../components/elements/Header";
import { Section } from "../components/elements/Wrapper";
import { Board } from "../components/postPage/Board";
import { CommentsList } from "../components/postPage/CommentsList";
import { useSearchParams } from "react-router-dom";
import post from "../data/post.json";
import postDetail from "../data/postDetail.json";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IComment, IBoard } from "../interfaces/comments";
import { commentsListState } from "../states/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";

export function PostPage() {
  const [idParams, setIdParams] = useSearchParams();
  const postId = idParams.get("id");
  const boardData = post.data[0];
  const commentData = postDetail.comments;
  const [comments, setCommentsData] = useRecoilState<IComment[]>(commentsListState);

  useEffect(() => {
    /** post id를 가져와서
     *
     */
    // getBoardData();
    setCommentsData(commentData);
    getBoardData();
  }, []);

  const getBoardData = async () => {
    await axios
      .get<IBoard>(`http://13.124.126.164:8080/community/post/${postId}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {});
  };

  // const [postDetails, setPostDetails] = useQuery();
  // if (postId) {
  //   console.log(postId);
  // }
  // console.log(postId ? postId : "");

  // const { isLoading, isError, data, error } = useQuery<IComment[], AxiosError>(commentList, getCommentList(), {
  //   refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
  //   retry: 0, // 실패시 재호출 몇번 할지
  //   onSuccess: (data) => {
  //     // 성공시 호출
  //     console.log(data);
  //   },
  //   onError: (error) => {
  //     // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
  //     // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
  //     console.log(error);
  //   },
  // });

  return (
    <>
      <Header />
      <Section style={{ padding: "0 340px 0 340px", display: "flex", justifyContent: "center" }}>
        {postId}
        <Column style={{ marginTop: "100px" }}>
          <Board {...boardData} />
          <CommentsList {...comments} />
        </Column>
      </Section>
    </>
  );
}
