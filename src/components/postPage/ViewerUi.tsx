// Toast-UI Viewer 임포트
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import styled from "styled-components";

interface ViewerUiProps {
  body: string;
}

export function ViewerUi({ body }: ViewerUiProps) {
  // 마크다운
  return (
    <Wrapper>
      <Viewer initialValue={body} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & .toastui-editor-contents p {
    color: white !important;
  }
`;
