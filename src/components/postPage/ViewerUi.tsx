// Toast-UI Viewer 임포트
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import styled from "styled-components";

interface ViewerUiProps {
  body: string;
}

export function ViewerUi({ body }: ViewerUiProps) {
  return (
    <Wrapper className="viewer">
      <Viewer initialValue={body} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & .toastui-editor-contents * {
    color: white;
    font-size: 15px;
  }

  code {
    color: rgba(219, 97, 92) !important;
    background-color: rgba(235, 235, 225);
  }
`;
