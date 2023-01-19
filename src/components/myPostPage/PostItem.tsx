import React from "react";
import styled from "styled-components";
import { HeartIcon } from "../icons/HeartIcon";
import { CommentIcon } from "../icons/CommentIcon";

interface IPost {
  postid: number;
  author: string;
  title: string;
  body: string;
  createdTime: string;
  like: number;
  reply: number;
}

export function PostItem({ postid, author, title, body,like,reply,createdTime }: IPost) {
  return (
    <Item>
      <Left>
        <User>
          <img src="logo192.png" />
          <div>
            <UserName>{author}</UserName>
            <UploadDate>{createdTime}</UploadDate>
          </div>
        </User>
        <Content>
          <Title>{title}</Title>
          <p>{body}</p>
        </Content>
        <Bottom>
          <Icon>
            <HeartIcon />
            <span>{like}</span>
          </Icon>
          <Icon>
            <CommentIcon />
            <span>{reply}</span>
          </Icon>
        </Bottom>
      </Left>
      <img src="logo192.png" />
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
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const User = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
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
  p {
    display: inline-block;
    white-space: nowrap;
    width: 691px;
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
  }
`;

const Title = styled.span`
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 691px;
  height: 24px;
  font-weight: 700;
  font-size: 20px;
  white-space: nowrap;
  color: #ffffff;
  opacity: 0.98;
  margin-bottom: 12px;
`;

const Bottom = styled.div`
  padding-left: 42px;
  display: flex;
  gap: 15px;
  flex-direction: row;
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
