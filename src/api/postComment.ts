import client from "./client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface CommentProps {
  postId: number;
  body?: string;
}

async function postComment(props: CommentProps) {
  const token = localStorage.getItem("token");
  return await client
    .post(`/community/post/${props.postId}`, JSON.stringify(props), {
      headers: {
        "Content-Type": `application/json`,
        JWT: token,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    });
}

export const usePostComment = () => {
  const queryClient = useQueryClient();
  return useMutation(postComment, {
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["postData"] });
    },
  });
};
