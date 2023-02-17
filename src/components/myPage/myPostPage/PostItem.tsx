import React from "react";
import styled from "styled-components";
import { HeartIcon } from "../../icons/HeartIcon";
import { CommentIcon } from "../../icons/CommentIcon";
import { useNavigate } from "react-router-dom";
import emoji_lion from "../../images/emoji_lion_24x24.png";

interface IPostItem {
  title: string;
  author: string;
  profileImg?: string;
  body: string;
  time: string;
  likes: number;
  reply: number;
  postId: number;
}

export function PostItem({ postId, author, title, body, likes, reply, time, profileImg }: IPostItem) {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/community/post/${postId}`);
  };
  return (
    <Item onClick={onClickHandler}>
      <Left>
        <User>
          <img src={profileImg || emoji_lion} alt="profile" />
          <div>
            <UserName>{author}</UserName>
            <UploadDate>{time}</UploadDate>
          </div>
        </User>
        <Content>
          <Title>{title}</Title>
          <p>{body}</p>
        </Content>
        <Bottom>
          <Icon>
            <HeartIcon />
            <span>{likes}</span>
          </Icon>
          <Icon>
            <CommentIcon />
            <span>{reply}</span>
          </Icon>
        </Bottom>
      </Left>
    </Item>
  );
}

const Item = styled.div`
  padding: 32px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: space-between;
  img {
    width: 140px;
    height: 140px;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    width: 100vw;
    height: 270px;
    border-bottom: none;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 688px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const User = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    padding: 0px 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
`;

const UserName = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.32px;
  color: #d7d7d7;
  opacity: 0.98;
`;

const UploadDate = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.32px;
  color: #d7d7d7;
  opacity: 0.98;
`;

const Content = styled.div`
  padding-left: 42px;
  width: 691px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    height: 60px;
    padding: 0 20px;
    margin-bottom: 0px;
    width: 100vw;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 70vw;
  }
  p {
    display: flex;
    white-space: nowrap;
    width: 649px;
    height: 46px;
    text-overflow: ellipsis;
    overflow-x: hidden;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.32px;
    color: #ffffff;
    opacity: 0.98;
    margin: 0;
    @media (max-width: 768px) {
      width: 85.89vw;
      height: 60px;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      width: 511px;
    }
  }
`;

const Title = styled.span`
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 691px;
  font-weight: 700;
  font-size: 20px;
  white-space: nowrap;
  color: #ffffff;
  opacity: 0.98;
  margin-bottom: 12px;
  @media (max-width: 768px) {
    width: 85.89vw;
    font-size: 4.1vw;
  }
`;

const Bottom = styled.div`
  padding-left: 42px;
  display: flex;
  gap: 15px;
  flex-direction: row;
  @media (max-width: 768px) {
    width: 100px;
    height: 17px;
    padding: 65px 20px;
  }
`;

const Icon = styled.div`
  display: flex;
  gap: 6px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: rgba(255, 255, 255, 0.7);
  img {
    width: 18px;
    height: 18px;
  }
`;
