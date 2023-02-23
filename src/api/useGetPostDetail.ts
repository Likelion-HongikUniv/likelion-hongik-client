import { useRecoilState } from "recoil";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { IBoard } from "../interfaces/comments";
import { boardState } from "../states/atoms";
import { getPostDetail } from "./getPostDetail";
import { useEffect } from "react";

type QueryResult = {
  board: IBoard;
  status: string;
};


export function useGetPostDetail(postId: number): QueryResult {
  const [board, setBoardData] = useRecoilState<IBoard>(boardState);
  const {
    data,
    status,
    refetch,
  } = useQuery(["postData", postId], async () => await getPostDetail(postId), { onSuccess: data => { setBoardData(data) }, enabled: !!postId });

  useEffect(() => {
    refetch();
  }, [postId]);

  return {
    board,
    status,
  };
}
