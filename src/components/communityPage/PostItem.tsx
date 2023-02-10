import styled from "styled-components";
import { HeartIcon } from "../icons/HeartIcon";
import { CommentIcon } from "../icons/CommentIcon";
import { IPost } from "../../interfaces/post";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Column, Row } from "../elements/Wrapper";
import { Profile } from "../icons/Profile";
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
          <Profile profile={post.author.profileImage as string} />
          <Column gap="16px">
            <Column gap="4px">
              <UserName>{post.author.nickname ? post.author.nickname : "아기사자"}</UserName>
              <UploadDate>{date}</UploadDate>
            </Column>
            <Title>{post.title}</Title>
            {/* <Body>{post.body}</Body> */}
            <Body>dasadasadasadasadasadasadasadasadasadasadasadasadasadasadasadasadasad</Body>
            <Row gap="15px">
              <Icon>
                <HeartIcon />
                <span>{post.likeCount}</span>
              </Icon>
              <Icon>
                <CommentIcon />
                <span>{post.commentCount}</span>
              </Icon>
            </Row>
          </Column>
        </Row>
        {post.thumbNailImage && isMobile && (
          <img src={post.thumbNailImage ? post.thumbNailImage : ""} alt="post-thumbnail" />
        )}
      </Left>
      {post.thumbNailImage && !isMobile && (
        <img src={post.thumbNailImage ? post.thumbNailImage : ""} alt="post-thumbnail" />
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
    width: 7.2917vw;
    height: 7.2917vw;
    object-fit: contain;
    border-radius: 0.625vw;
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
  &:last-child {
    border: none;
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

const UserName = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.32px;
  color: #fff;
  opacity: 0.98;
  @media all and (max-width: 768px) {
    font-weight: 600;
    font-size: 4.1026vw;
    line-height: 4.8718vw;
  }
`;

const UploadDate = styled.span`
  font-weight: 400;
  font-size: 0.7292vw;
  line-height: 0.8854vw;
  letter-spacing: -0.0167vw;
  color: #d7d7d7;
  opacity: 0.98;
  @media all and (max-width: 768px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.32px;
  }
`;

const Content = styled.div`
  padding-left: 2.1875vw;
  width: 35.9896vw;
  margin-bottom: 1.0417vw;
  p {
    display: inline-block;
    white-space: nowrap;
    width: 100%;
    height: 46px;
    text-overflow: ellipsis;
    overflow-x: hidden;
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;
    letter-spacing: -0.32px;
    color: #ffffff;
    opacity: 0.98;
    margin: 0;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    padding-left: 0;
    p {
      width: 100%;
      font-size: 3.1vw;
      line-height: 5.1vw;
      height: auto;
    }
  }
`;

const Title = styled.span`
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.32px;
  white-space: nowrap;
  color: #ffffff;
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
`;

const Bottom = styled.div`
  padding-left: 2.2vw;
  display: flex;
  gap: 0.8vw;
  flex-direction: row;
  @media all and (max-width: 768px) {
    padding-left: 0.4vw;
    gap: 3.8462vw;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  gap: 0.3125vw;
  font-size: 0.7292vw;
  line-height: 0.8854vw;
  color: rgba(255, 255, 255, 0.7);
  svg {
    width: 0.9375vw;
    height: 0.9375vw;
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
