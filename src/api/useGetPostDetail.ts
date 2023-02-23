import { useRecoilState, useRecoilCallback } from "recoil";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { IComment, IBoard } from "../interfaces/comments";
import { commentsListState, boardState } from "../states/atoms";
import { getPostDetail } from "./getPostDetail";
import { useEffect } from "react";

type QueryResult = {
  board: IBoard | null;
  setBoardData: (data: IBoard) => void;
  status: string;
};

export function useGetPostDetail(postId: number): QueryResult {
  const [board, setBoardData] = useRecoilState<IBoard>(boardState);
  const [comment, setCommentsData] = useRecoilState<IComment[]>(commentsListState);
  const {
    data: postData,
    isLoading,
    status,
    refetch,
  } = useQuery(["post-detail", postId], async () => await getPostDetail(postId), { initialData: board });

  useEffect(() => {
    refetch();
  }, [refetch, postId]);

  return {
    board,
    setBoardData,
    status,
  };
}
