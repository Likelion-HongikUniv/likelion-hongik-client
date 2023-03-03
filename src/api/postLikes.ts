import client from "./client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const token = localStorage.getItem("token");

interface LikeProps {
  id: number;
  isComment: boolean;
}

async function postLike(props: LikeProps) {
  let url = ``;
  if (props.isComment) {
    url = `/community/comment/${props.id}/like`;
  } else {
    url = `community/reply/${props.id}/like`
  }
  return await client
    .post(url, { body: null }, {
      headers: {
        "Content-Type": `application/json`,
        JWT: token,
      },
    })
}

export const usePostLikeControl = () => {
  const queryClient = useQueryClient();
  return useMutation(postLike, {
    onSuccess: () => {
      return queryClient.invalidateQueries(["postData"]);
    },
    onError: (error) => {
      throw error;
    },
  });
};
