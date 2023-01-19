import React from "react";
import styled from "styled-components";
import { PostItem } from "./PostItem";
import { IPost } from "../../interfaces/post";

export function PostList(postsData: IPost[] | any[]) {
  const posts = Object.values(postsData).map((posts: IPost) => posts);
  return (
    <List>
      {posts.map((post: IPost) => {
        return <PostItem {...post} />;
      })}
    </List>
  );
}

const List = styled.div`
  width: 100%;
`;
