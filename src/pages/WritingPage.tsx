import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Header } from "../components/elements/Header";
import { Section } from "../components/elements/Wrapper";
import { ConfirmationPopup } from "../components/writingPage/ConfirmationPopup";
import { InputBar } from "../components/writingPage/InputBar";
import { TabBar } from "../components/writingPage/TabBar";
import { TextEditor } from "../components/writingPage/TextEditor";
import { ThumbnailUploadPopup } from "../components/writingPage/ThumbniailUploadPopup";
import {
  isCancelButtonClickedState,
  isThumbnailSetButtonClickedState,
  postThumbnailUrlState,
  userState,
} from "../states";
import useInput from "../hooks/useInput";

export function WritingPage() {
  const postThumbnailImage = useRecoilValue(postThumbnailUrlState);
  const isCancelButtonClicked = useRecoilValue(isCancelButtonClickedState);
  const isThumbnailSetButtonClicked = useRecoilValue(isThumbnailSetButtonClickedState);
  const userInfo = useRecoilValue(userState);
  console.log(userInfo);

  const [clickedCategory, setClickedCategory] = useState("공지사항");
  const title = useInput(""); // title.value가 값임

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
            style={{ marginTop: "20px" }}
            clickedCategory={clickedCategory}
            setClickedCategory={setClickedCategory}
          />
          <InputBar style={{ marginTop: "60px" }} {...title} />
          <TextEditor title={title.value} category={clickedCategory} />
          {isCancelButtonClicked && <ConfirmationPopup />}
          {isThumbnailSetButtonClicked && <ThumbnailUploadPopup />}
        </div>
      </Section>
    </>
  );
}
