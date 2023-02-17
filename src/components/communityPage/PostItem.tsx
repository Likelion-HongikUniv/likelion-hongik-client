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
  const isMobile = useMediaQuery("( max-width: 767px )");
  const navigate = useNavigate();
  const curDate = post.createdTime;
  const date = moment(curDate, "YYYYMMDDHHmmss").format("YYYY.MM.DD");

  const onClickHandler = () => {
    navigate(`/community/post/${post.postId}`);
  };
  return (
    <Item onClick={onClickHandler}>
      <Left>
        {isMobile ? (
          <Column gap="20px">
            <Row gap="12px">
              <Profile profile={(post.author.profileImage as string) || (emoji_lion as string)} />
              <Column gap="4px">
                <UserName>{post.author.nickname ? post.author.nickname : "아기사자"}</UserName>
                <UploadDate>{date}</UploadDate>
              </Column>
            </Row>
            {post.thumbNailImage && (
              <PostImg src={post.thumbNailImage ? post.thumbNailImage : ""} alt="post-thumbnail" />
            )}
            <Column gap="12px">
              <Title>{post.title}</Title>
              <Body>{post.body}</Body>
            </Column>
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
        ) : (
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
        )}
      </Left>
      {!isMobile && post.thumbNailImage ? (
        <PostImg src={post.thumbNailImage ? post.thumbNailImage : ""} alt="post-thumbnail" />
      ) : (
        !isMobile && <NoneImg />
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
  @media all and (max-width: 767px) {
    padding: 20px 0 23px;
    display: block;
  }
`;

const PostImg = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 12px;
  object-fit: cover;
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100px;
    height: 100px;
    border-radius: 8px;
  }
  @media all and (max-width: 767px) {
    width: 90px;
    height: 90px;
    border-radius: 8px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const NoneImg = styled.div`
  width: 140px;
  height: 140px;
  background: transparent;
  opacity: 0.98;
  border-radius: 12px;
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100px;
    height: 100px;
    border-radius: 8px;
  }
`;

const UserName = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.32px;
  color: #d7d7d7;
  opacity: 0.98;
  @media all and (max-width: 767px) {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }
`;

const UploadDate = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.32px;
  color: #d7d7d7;
  opacity: 0.98;
  @media all and (max-width: 767px) {
    font-size: 12px;
    line-height: 15px;
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
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media all and (max-width: 767px) {
    width: 85.9vw;
    height: 48px;
    font-size: 16px;
    line-height: 24px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 68.5vw;
    font-size: 16px;
    line-height: 19px;
  }
`;

const Body = styled.p`
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 35.9896vw;
  height: 46px;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.32px;
  color: ${WHITE_1};
  opacity: 0.98;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media all and (max-width: 767px) {
    width: 89vw;
    font-size: 12px;
    letter-spacing: -0.32px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 68.5vw;
    font-size: 14px;
    line-height: 21px;
  }
`;

const Bottom = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: row;
  margin-top: 13px;
  @media all and (max-width: 767px) {
    padding-left: 2px;
    gap: 15px;
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
  @media all and (max-width: 767px) {
    gap: 6px;
    svg {
      width: 17px;
      height: 17px;
    }
    font-size: 12px;
  }
`;
