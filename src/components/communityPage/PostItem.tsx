import styled from "styled-components";
import { HeartIcon } from "../icons/HeartIcon";
import { CommentIcon } from "../icons/CommentIcon";
import { IPost } from "../../interfaces/post";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Column, Row } from "../elements/Wrapper";
import { Profile } from "../icons/Profile";
import { WHITE_1 } from "../../styles/theme";
import emoji_lion from "./../images/emoji_lion_24x24.png";

export function PostItem(post: IPost) {
  const isMobile = useMediaQuery("( max-width: 768px )");
  const navigate = useNavigate();
  const curDate = post.createdTime;
  const date = moment(curDate, "YYYYMMDDHHmmss").format("YYYY.MM.DD");

  const onClickHandler = () => {
    navigate(`/community/post/${post.postId}`);
  };
  return (
    <Item onClick={onClickHandler}>
      <Left>
        <Row gap="12px">
          <Profile profile={(post.author.profileImage as string) || (emoji_lion as string)} />
          <Column gap="16px">
            <Column gap="4px">
              <UserName>{post.author.nickname ? post.author.nickname : "아기사자"}</UserName>
              <UploadDate>{date}</UploadDate>
            </Column>
            <Title>{post.title}</Title>
            <Body>{post.body}</Body>
            <Bottom>
              <Icon>
                <HeartIcon />
                <span>{post.likeCount}</span>
              </Icon>
              <Icon>
                <CommentIcon />
                <span>{post.commentCount}</span>
              </Icon>
            </Bottom>
          </Column>
        </Row>
        {isMobile && post.thumbNailImage && (
          <img src={post.thumbNailImage ? post.thumbNailImage : ""} alt="post-thumbnail" />
        )}
      </Left>
      {!isMobile && post.thumbNailImage ? (
        <img src={post.thumbNailImage ? post.thumbNailImage : ""} alt="post-thumbnail" />
      ) : (
        <NoneImg />
      )}
    </Item>
  );
}

const Item = styled.div`
  padding: 32px 0 41px;
  border-bottom: 0.0521vw solid rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  img {
    width: 140px;
    height: 140px;
    border-radius: 12px;
    object-fit: cover;
  }
  @media all and (max-width: 768px) {
    padding-bottom: 5.1282vw;
    display: block;
    img {
      width: 23.0769vw;
      height: 23.0769vw;
      margin-bottom: 5.1282vw;
    }
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin: 0;
    object-fit: cover;
  }
`;

const NoneImg = styled.div`
  width: 140px;
  height: 140px;
  background: transparent;
  opacity: 0.98;
  border-radius: 12px;
`;

const UserName = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.32px;
  color: #d7d7d7;
  opacity: 0.98;
  @media all and (max-width: 768px) {
    font-weight: 600;
    font-size: 4.1026vw;
    line-height: 4.8718vw;
  }
`;

const UploadDate = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  letter-spacing: -0.32px;
  color: #d7d7d7;
  opacity: 0.98;
  @media all and (max-width: 768px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.32px;
  }
`;

const Title = styled.span`
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 35.9896vw;
  height: 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.32px;
  color: ${WHITE_1};
  opacity: 0.98;
  @media all and (max-width: 768px) {
    width: 100%;
    height: auto;
    font-size: 4.1vw;
    line-height: 100%;
  }
`;

const Body = styled.p`
  margin: 0;
  text-overflow: ellipsis;
  overflow-x: hidden;
  width: 35.9896vw;
  height: 46px;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.32px;
  color: ${WHITE_1};
  opacity: 0.98;
`;

const Bottom = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: row;
  margin-top: 13px;
  @media all and (max-width: 768px) {
    padding-left: 0.4vw;
    gap: 3.8462vw;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  gap: 6px;
  color: rgba(255, 255, 255, 0.7);
  svg {
    width: 20px;
    height: 20px;
  }
  @media all and (max-width: 768px) {
    gap: 1.5385vw;
    svg {
      width: 4.2744vw;
      height: 4.2744vw;
    }
    font-size: 3.0769vw;
  }
`;
