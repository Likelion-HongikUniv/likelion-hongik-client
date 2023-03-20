import client from "./client";

interface postProps {
  title: string;
  editorContent: string;
  thumbnailImageUrl: string;
}

export async function postPost(token: string, props: postProps) {
  await client.post(
    `/community/posts/BOARD/NOTICE`,
    { title: props.title, body: props.editorContent, thumbnailImageUrl: props.thumbnailImageUrl },
    { headers: { JWT: token } },
  );
}
