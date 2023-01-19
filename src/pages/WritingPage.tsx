import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Header } from "../components/elements/Header";
import { Section } from "../components/elements/Wrapper";
import { ConfirmationPopup } from "../components/writingPage/ConfirmationPopup";
import { InputBar } from "../components/writingPage/InputBar";
import { TabBar } from "../components/writingPage/TabBar";
import { TextEditor } from "../components/writingPage/TextEditor";
import { isCancelButtonClickedState } from "../states";

export function WritingPage() {
  const isCancelButtonClicked = useRecoilValue(isCancelButtonClickedState);
  const [clickedCategory, setClickedCategory] = useState("공지사항");
  return (
    <>
      <Header />
      <Section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "80%", justifyContent: "center", alignContent: "center" }}>
          <TabBar
            style={{ marginTop: "40px" }}
            clickedCategory={clickedCategory}
            setClickedCategory={setClickedCategory}
          />
          <InputBar style={{ marginTop: "60px" }} />
          <TextEditor />
          {isCancelButtonClicked ? <ConfirmationPopup /> : <></>}
        </div>
      </Section>
    </>
  );
}
