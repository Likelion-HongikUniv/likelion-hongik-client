import { useState } from "react";
import { useRecoilValue } from "recoil";
import { Header } from "../components/elements/Header";
import { Section } from "../components/elements/Wrapper";
import { ConfirmationPopup } from "../components/writingPage/ConfirmationPopup";
import { InputBar } from "../components/writingPage/InputBar";
import { TabBar } from "../components/writingPage/TabBar";
import { TextEditor } from "../components/writingPage/TextEditor";
import { ThumbnailUploadPopup } from "../components/writingPage/ThumbniailUploadPopup";
import { isCancelButtonClickedState, isThumbnailSetButtonClickedState } from "../states";
import useInput from "../hooks/useInput";
import { useLocation } from "react-router-dom";
import { nowTagState } from "../states/atoms";

export function WritingPage() {
  const isCancelButtonClicked = useRecoilValue(isCancelButtonClickedState);
  const isThumbnailSetButtonClicked = useRecoilValue(isThumbnailSetButtonClickedState);
  const selectedSubCategory = useRecoilValue(nowTagState);
  const { state } = useLocation();
  const selectedMainCategory = state.category;
  const [clickedMainCategory, setClickedMainCategory] = useState(selectedMainCategory);
  const [clickedSubCategory, setClickedSubCategory] = useState(selectedSubCategory.key);
  const title = useInput(state.title); // title.value가 값임

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
        <div style={{ width: "80vw", justifyContent: "center", alignContent: "center" }}>
          <TabBar
            clickedMainCategory={clickedMainCategory}
            setClickedMainCategory={setClickedMainCategory}
            clickedSubCategory={clickedSubCategory}
            setClickedSubCategory={setClickedSubCategory}
          />
          <InputBar style={{ marginTop: "60px" }} {...title} />
          <TextEditor title={title.value} mainCategory={clickedMainCategory} subCategory={clickedSubCategory} />
          {isCancelButtonClicked && <ConfirmationPopup />}
          {isThumbnailSetButtonClicked && <ThumbnailUploadPopup />}
        </div>
      </Section>
    </>
  );
}
