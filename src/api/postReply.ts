import client from "./client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface ReplyProps {
  id: number;
  body?: string;
}

async function postReply(props: ReplyProps) {
  const token = localStorage.getItem("token");
  return await client
    .post(`community/comment/${props.id}`, JSON.stringify(props.body), {
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

export const usePostReply = () => {
  const queryClient = useQueryClient();
  return useMutation(postReply, {
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["postData"] });
    },
  });
};
