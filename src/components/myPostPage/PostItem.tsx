import React from "react";
import styled from "styled-components";
// import { HeartIcon } from "../icons/HeartIcon";
// import { CommentIcon } from "../icons/CommentIcon";

export function PostItem() {
  return (
    <Item>
      <Left>
        <User>
          <img src="logo192.png" />
          <div>
            <UserName>Ahyun Kim</UserName>
            <UploadDate>2022.11.30</UploadDate>
          </div>
        </User>
        <Content>
          <Title>
            야옹맨의 게시글 제목야옹맨의 게시글 제목야옹맨의 게시글 제목야옹맨의 게시글 제목야옹맨의 게시글 제목
            야옹맨의 게시글 제목 야옹맨의 게시글 제목
          </Title>
          <p>
            안녕하세요! 멋사 분들이 듣는 개발 강의가 있나용? 추천 부탁드립니다!
            <br />
            백준코딩만 하다가 대가리 깨질것같아서욧!! 개발짱짱맨 김아현이 되고싶습니닷 ㅇㅅㅇ 언능알려조잉~~
          </p>
        </Content>
        <Bottom>
          <Icon>
            {/* <HeartIcon /> */}
            <span>200</span>
          </Icon>
          <Icon>
            {/* <CommentIcon /> */}
            <span>200</span>
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
