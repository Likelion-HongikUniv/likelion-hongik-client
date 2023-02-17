// Toast-UI Viewer 임포트
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import styled from "styled-components";
import useMediaQuery from "../../hooks/useMediaQuery";

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
    color: white !important;
    font-size: 15px;
  }
`;
