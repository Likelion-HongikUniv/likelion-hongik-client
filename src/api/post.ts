import axios from "axios";
import client from "./client";

interface postProps {
  title: string;
  editorContent: string;
  thumbnailImageUrl: string;
}

export async function postPost(token: string, props: postProps) {
  await axios
    .post(
      `http://13.124.126.164:8080/community/posts/BOARD/NOTICE`,
      { title: props.title, body: props.editorContent, thumbnailImageUrl: props.thumbnailImageUrl },
      { headers: { JWT: token } },
    )
    .then((res) => console.log(res));
}
