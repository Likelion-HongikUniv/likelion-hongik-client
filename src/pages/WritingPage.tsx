import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Header } from "../components/elements/Header";
import { Section } from "../components/elements/Wrapper";
import { ConfirmationPopup } from "../components/writingPage/ConfirmationPopup";
import { InputBar } from "../components/writingPage/InputBar";
import { TabBar } from "../components/writingPage/TabBar";
import { TextEditor } from "../components/writingPage/TextEditor";
import { ThumbnailUploadPopup } from "../components/writingPage/ThumbniailUploadPopup";
import { isCancelButtonClickedState, isThumbnailSetButtonClickedState } from "../states";
import axios from "axios";

export function WritingPage() {
  const isCancelButtonClicked = useRecoilValue(isCancelButtonClickedState);
  const isThumbnailSetButtonClicked = useRecoilValue(isThumbnailSetButtonClickedState);
  const [clickedCategory, setClickedCategory] = useState("공지사항");
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://13.125.72.138:8080/pre-signed-url/thumbnailImage", { headers: { JWT: token } })
      .then((res) => console.log(res));
  }, []);

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
          <InputBar style={{ marginTop: "60px" }} />
          <TextEditor />
          {isCancelButtonClicked && <ConfirmationPopup />}
          {isThumbnailSetButtonClicked && <ThumbnailUploadPopup />}
        </div>
      </Section>
    </>
  );
}
