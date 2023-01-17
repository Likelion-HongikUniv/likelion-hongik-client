import styled from "styled-components";
import { Comments } from "./Comments";
import { Row, Column } from "../elements/Wrapper";
import { IComment, IProfile } from "./Comments";
import { BLACK_2 } from "../../styles/theme";
import { atom, useRecoilState } from "recoil";

interface CommentList {
  commentList?: IComment[];
}

const commentState = atom<IComment[]>({
  key: "comment",
  default: [
    {
      id: 1,
      body: "string test 바디 테스트 테스트",
      profile: {
        profileId: 1,
        name: "taehwiLee",
        profilePhoto: "",
      },
      commentCount: 1,
      date: "2023-01-11",
      isDeleted: false,
      reply: [
        {
          id: 4,
          body: "대댓글 1 반갑습니다.~",
          profile: {
            profileId: 3,
            name: "영국관광객",
            profilePhoto: "https:// 어쩌구",
          },
          post_id: 1,
          comment_id: 1,
          commentCount: 1,
          date: "2021-02-26 10:42",
          isDeleted: false,
        },
        {
          id: 4,
          body: "대댓글2 반갑습니다.~",
          profile: {
            profileId: 3,
            name: "플락스타일동렬",
            profilePhoto: "https:// 어쩌구",
          },
          post_id: 1,
          comment_id: 1,
          commentCount: 1,
          date: "2021-02-26 10:42",
          isDeleted: false,
        },
      ],
    },
    {
      id: 2,
      body: "2번째로 반갑습니다.~",
      profile: {
        profileId: 3,
        name: "플락스타일동렬",
        profilePhoto: "https:// 어쩌구",
      },
      post_id: 1,
      commentCount: 1,
      date: "2021-02-26 10:42",
      isDeleted: false,
      reply: [
        {
          id: 6,
          body: "대댓글2-1 반갑습니다.~",
          profile: {
            profileId: 7,
            name: "대댓글러",
            profilePhoto: "https:// 어쩌구",
          },
          post_id: 1,
          comment_id: 2,
          commentCount: 1,
          date: "2021-02-26 10:42",
          isDeleted: false,
        },
      ],
    },
    {
      id: 3,
      body: "3번째로 반갑습니다.~",
      profile: {
        profileId: 3,
        name: "플락스타일동렬",
        profilePhoto: "https:// 어쩌구",
      },
      post_id: 1,
      commentCount: 1,
      date: "2021-02-26 10:42",
      isDeleted: false,
    },
  ],
});

export function CommentsList({ commentList }: CommentList) {
  // const { data: comments, isLoading, isError, error } = useQuery<IComment[], Error>("comments", getComments);
  const [comments, setComments] = useRecoilState(commentState);
  console.log(comments);

  // const getComments = async () => {
  //   const { data } = await axios.get<IComment[]>("http://localhost:3000/post/${postId}");
  //   return data;
  // };

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts/1/comments").then((response) => {
  //     setComments(response.data);
  //   });
  // }, []);

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
        <Column gap="32px">
          {comments.map((comments: IComment) => {
            var curReply = comments.reply;
            var curProfile = comments.profile;
            return (
              <Comments
                key={comments.id}
                profile={curProfile}
                body={comments.body}
                date={comments.date}
                commentCount={comments.commentCount}
                comment_id={comments.id}
                isDeleted={comments.isDeleted}
                reply={curReply}
              />
            );
          })}
        </Column>
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
