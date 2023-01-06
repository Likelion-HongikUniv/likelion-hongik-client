// import axios from "axios";
// import { useRecoilState } from "recoil";
import { Comments } from "./Comments";
import { Column } from "../elements/Wrapper";
import { CommentList, IComment } from "../../interfaces/comment";

export function CommentsList({ commentList }: CommentList) {
  return (
    <>
      <Column>
        <div>
          {commentList.map((comment: IComment) => (
            <Comments key={comment.key} id={comment.id} />
          ))}
        </div>
      </Column>
    </>
  );
}
