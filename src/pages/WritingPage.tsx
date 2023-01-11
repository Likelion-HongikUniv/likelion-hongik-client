import { Header } from "../components/elements/Header";
import { Section } from "../components/elements/Wrapper";
import { TextEditor } from "../components/writingPage/TextEditor";

export function WritingPage() {
  return (
    <>
      <Header />
      <Section style={{ display: "flex", justifyContent: "center" }}>
        <TextEditor />
      </Section>
    </>
  );
}
