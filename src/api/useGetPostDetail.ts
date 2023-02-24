import { useRecoilState, useRecoilTransactionObserver_UNSTABLE } from "recoil";
import { useQuery } from "@tanstack/react-query";
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

  // useTransactionObservation_UNSTABLE hook
  // : observe changes to the Recoil state. This function takes a callback that is called whenever a transaction is committed. In the callback, we check if the current value of boardState is different from the previous value, and if so, we update the board state using the setBoard function.

  const transactionObservation_UNSTABLE = useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
    const currentBoard = snapshot.getLoadable(boardState).valueOrThrow();
    if (currentBoard !== board) {
      setBoardData(currentBoard);
    }
  });

  return {
    board,
    status,
  };
}

