import { Header } from "../components/elements/Header";
import { Board } from "../components/postPage.tsx/Board";
import { Comments } from "../components/postPage.tsx/Comments";
import { Replies } from "../components/postPage.tsx/Replies";

export function PostPage() {
  return (
    <>
      <Header />
      <Board />
    </>
  );
}
