import client from "./client";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
const token = localStorage.getItem("token");

async function deletePost(postId: number): Promise<void> {
  return await client
    .delete(`community/post/${postId}`, {
      headers: {
        "Content-Type": `application/json`,
        JWT: `${token}`,
      },
    })
    .catch((err) => {
      if (err.response.status === 401 || err.response.status === 500) {
        alert("🦁 접근 권한이 없습니다. 로그인이 필요합니다 🦁");
      }
      if (err.response.status === 404) {
        alert("🦁 삭제 대상을 찾을 수 없습니다 🦁");
      }
      window.location.reload();
      throw err;
    })
    .then((response) => {
      alert("🦁 글이 삭제되었습니다 🦁");
    });
}

async function deleteComment(commentId: number): Promise<void> {
  return await client
    .delete(`community/comment/${commentId}`, {
      headers: {
        "Content-Type": `application/json`,
        JWT: `${token}`,
      },
    })
    .catch((err) => {
      if (err.response.status === 401 || err.response.status === 500) {
        alert("🦁 접근 권한이 없습니다. 로그인이 필요합니다 🦁");
      }
      if (err.response.status === 404) {
        alert("🦁 삭제 대상을 찾을 수 없습니다 🦁");
      }
      window.location.reload();
      throw err;
    })
    .then((response) => {
      alert("🦁 댓글이 삭제되었습니다 🦁");
    });
}

async function deleteReply(replyId: number): Promise<void> {
  return await client
    .delete(`community/reply/${replyId}`, {
      headers: {
        "Content-Type": `application/json`,
        JWT: `${token}`,
      },
    })
    .catch((err) => {
      if (err.response.status === 401 || err.response.status === 500) {
        alert("🦁 접근 권한이 없습니다. 로그인이 필요합니다 🦁");
      }
      if (err.response.status === 404) {
        alert("🦁 삭제 대상을 찾을 수 없습니다 🦁");
      }
      window.location.reload();
      throw err;
    })
    .then((response) => {
      alert("🦁 답글이 삭제되었습니다 🦁");
    });
}

function useDeletePost(): UseMutationResult<void, unknown, number, unknown> {
  return useMutation(deletePost);
}

function useDeleteComment(): UseMutationResult<void, unknown, number, unknown> {
  return useMutation(deleteComment);
}

function useDeleteReply(): UseMutationResult<void, unknown, number, unknown> {
  return useMutation(deleteReply);
}

export function useDeletePostState() {
  const deleteBoard = useDeletePost();

  async function handleDeletePost(postId: number) {
    try {
      await deleteBoard.mutateAsync(postId);
    } catch (error) {
      console.error(error);
    }
  }
  return handleDeletePost;
}

export function useDeleteCommentState() {
  const deleteComment = useDeleteComment();

  async function handleDeleteComment(commentId: number) {
    try {
      await deleteComment.mutateAsync(commentId);
    } catch (error) {
      console.error(error);
    }
  }
  return handleDeleteComment;
}

export function useDeleteReplyState() {
  const deleteReply = useDeleteReply();

  async function handleDeleteReply(replyId: number) {
    try {
      await deleteReply.mutateAsync(replyId);
    } catch (error) {
      console.error(error);
    }
  }
  return handleDeleteReply;
}
