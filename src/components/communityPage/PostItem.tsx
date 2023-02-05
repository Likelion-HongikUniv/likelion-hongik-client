import styled from "styled-components";
import { HeartIcon } from "../icons/HeartIcon";
import { CommentIcon } from "../icons/CommentIcon";
import { IPost } from "../../interfaces/post";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

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
        <User>
          <img src={post.author.profileImage ? post.author.profileImage : ""} alt="user-profile" />
          <div>
            <UserName>{post.author.nickname}</UserName>
            <UploadDate>{date}</UploadDate>
          </div>
        </User>
        {post.thumbNailImage && isMobile && (
          <img src={post.thumbNailImage ? post.thumbNailImage : ""} alt="post-thumbnail" />
        )}
        <Content>
          <Title>{post.title}</Title>
          <p>{post.body}</p>
        </Content>
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
      </Left>
      {post.thumbNailImage && !isMobile && (
        <img src={post.thumbNailImage ? post.thumbNailImage : ""} alt="post-thumbnail" />
      )}
    </Item>
  );
}

const Item = styled.div`
  padding: 1.6667vw 0;
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
`;

const User = styled.div`
  display: flex;
  gap: 0.625vw;
  margin-bottom: 0.8333vw;
  div {
    display: flex;
    flex-direction: column;
    gap: 0.2083vw;
  }
  img {
    width: 1.5625vw;
    height: 1.5625vw;
    border-radius: 100%;
  }
  @media all and (max-width: 768px) {
    gap: 3.0769vw;
    margin-bottom: 6.1538vw;
    div {
      gap: 1.0256vw;
    }
    img {
      width: 7.6923vw;
      height: 7.6923vw;
    }
  }
`;

const UserName = styled.span`
  font-weight: 600;
  font-size: 0.8333vw;
  line-height: 0.9896vw;
  letter-spacing: -0.0167vw;
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
  font-size: 0.7292vw;
  line-height: 0.8854vw;
  letter-spacing: -0.0167vw;
  color: #d7d7d7;
  opacity: 0.98;
  @media all and (max-width: 768px) {
    font-weight: 400;
    font-size: 3.0769vw;
    line-height: 3.8462vw;
  }
`;

const Content = styled.div`
  padding-left: 2.1875vw;
  width: 35.9896vw;
  margin-bottom: 1.0417vw;
  p {
    display: inline-block;
    white-space: nowrap;
    width: 35.9896vw;
    height: 2.3958vw;
    text-overflow: ellipsis;
    overflow-x: hidden;
    font-weight: 400;
    font-size: 0.8333vw;
    line-height: 1.1979vw;
    letter-spacing: -0.0167vw;
    color: #ffffff;
    opacity: 0.98;
    margin: 0;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    padding-left: 0;
    p {
      width: 100%;
      font-size: 3.0769vw;
      line-height: 5.1282vw;
      height: auto;
    }
  }
`;

const Title = styled.span`
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 35.9896vw;
  height: 1.25vw;
  font-weight: 700;
  font-size: 1.0417vw;
  white-space: nowrap;
  color: #ffffff;
  opacity: 0.98;
  margin-bottom: 0.625vw;
  @media all and (max-width: 768px) {
    width: 100%;
    height: auto;
    font-size: 4.1026vw;
    line-height: 100%;
  }
`;

const Bottom = styled.div`
  padding-left: 2.1875vw;
  display: flex;
  gap: 0.7813vw;
  flex-direction: row;
  @media all and (max-width: 768px) {
    padding-left: 0.4282vw;
  }
`;

const Icon = styled.div`
  display: flex;
  font-weight: 600;
  gap: 0.3125vw;
  font-size: 0.7292vw;
  line-height: 0.8854vw;
  color: rgba(255, 255, 255, 0.7);
  img {
    width: 0.9375vw;
    height: 0.9375vw;
  }
  @media all and (max-width: 768px) {
    img {
      width: 3.5897vw;
      height: 3.5897vw;
    }
  }
`;
