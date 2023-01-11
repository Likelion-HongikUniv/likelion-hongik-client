import React from "react";
import styled from "styled-components";
import { PostItem } from "./PostItem";

export function PostList() {
  return (
    <List>
      <PostItem />
    </List>
  );
}

const List = styled.div`
  width: 100%;
`;
