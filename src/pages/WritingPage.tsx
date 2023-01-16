import { useRecoilValue } from "recoil";
import { Header } from "../components/elements/Header";
import { Section } from "../components/elements/Wrapper";
import { ConfirmationPopup } from "../components/writingPage/ConfirmationPopup";
import { TextEditor } from "../components/writingPage/TextEditor";
import { isCancelButtonClickedState } from "../states";

export function WritingPage() {
  const isCancelButtonClicked = useRecoilValue(isCancelButtonClickedState);
  return (
    <>
      <Header />
      <Section style={{ display: "flex", justifyContent: "center" }}>
        <TextEditor />
        {isCancelButtonClicked ? <ConfirmationPopup /> : <></>}
      </Section>
    </>
  );
}
