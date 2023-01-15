import axios from "axios";
import styled from "styled-components";
import { Comments } from "./Comments";
import { Row, Column } from "../elements/Wrapper";
import { IComment } from "./Comments";
import { BLACK_2 } from "../../styles/theme";
import { atom, useRecoilState } from "recoil";
import { useEffect } from "react";

// "id": 2,
// 			"body": "안녕하세요!!",
// 			"profile":
// 				{
// 					"profile_id" :"1",
// 					"name" : "갓태휘",
// 					"profile_photo : "https:// 어쩌구 "
// 				}
// 			"post_id":"1",
// 			"commentLike": 0,
// 			"createdTime": "2023-02-25",
// 			"isDeleted": false,
// 			"reply": [
// 				{
// 					"id": 4,
// 					"body": "반갑습니다.~",
// 					"profile":
// 						{
// 							"profile_id" :3,
// 							"name" : "플락스타일동렬",
// 							"profile_photo : "https:// 어쩌구 "
// 						}
// 					"post_id" : 1
// 					"comment_id" : 2
// 					"commentCount": 1,
// 					"createdAt": "2021-02-26 10:42",
// 					"isDeleted": false,
// 					"reply": []
// 				},

interface CommentList {
  commentList?: IComment[];
}

const commentState = atom<IComment[]>({
  key: "comment",
  default: [
    {
      key: 0,
      id: 1,
      body: "comment test1",
      username: "감자",
      created: 20230111,
      replyId: [1, 2, 4],
    },

    {
      key: 2,
      id: 2,
      username: "빼로로",
      body: "comment test2",
      created: 20230111,
      replyId: [],
    },

    {
      key: 3,
      id: 3,
      username: "건빵스",
      body: "comment test3",
      created: 20230111,
      replyId: [],
    },
  ],
});

// const getComments = async () => {
//   const { data } = await axios.get<IComment[]>("http://localhost:3000/post/${postId}");
//   return data;
// };

export function CommentsList({ commentList }: CommentList) {
  // const { data: comments, isLoading, isError, error } = useQuery<IComment[], Error>("comments", getComments);
  const [comments, setComments] = useRecoilState(commentState);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1/comments").then((response) => {
      setComments(response.data);
    });
  }, []);

  const onClickComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    // setInputText();
  };

  return (
    <>
      <Row gap="1rem" justifyContent="center" alignItems="center">
        <InputContainer type="text" placeholder="답변을 남겨보세요!" />
        <InputButton onClick={onClickComment}>작성</InputButton>
      </Row>
      <Column>
        <div>
          {comments.map((comments: IComment) => (
            <Comments key={comments.key} id={comments.id} username={comments.username} created={comments.created} />
          ))}
        </div>
      </Column>
    </>
  );
}

const InputContainer = styled.input`
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 8px;
  background-color: ${BLACK_2};
  margin: 20px 0 20px 0;
  padding: 16px;
`;

const InputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 108px;
  height: 52px;

  background: #e9e9e9;
  border-radius: 8px;

  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.32px;
`;
