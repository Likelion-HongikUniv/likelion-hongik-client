import { Column } from "../components/elements/Wrapper";
import { Header } from "../components/elements/Header";
import { Section } from "../components/elements/Wrapper";
import { Board } from "../components/postPage/Board";
import { CommentsList } from "../components/postPage/CommentsList";

export function PostPage() {
  const body = ` 안녕하세요! 멋사 분들이 듣는 개발 강의가 있나용? 추천 부탁드립니다! 백준코딩만 하다가 대가리 깨질것같아서욧!!
  개발짱짱맨 김아현이 되고싶습니닷 ㅇㅅㅇ 언능알려조잉~~  
  참고로 건빵이는 무지 귀엽구요 빼로는 카와이해요`;

  return (
    <>
      <Header />
      <Section style={{ padding: "0 340px 0 340px", display: "flex", justifyContent: "center" }}>
        <Column style={{ marginTop: "100px" }}>
          <Board key={0} id={0} title={"게시글 제목 테스트"} username={"사용자 이름"} body={body} />
          <CommentsList commentList={[]}></CommentsList>
        </Column>
      </Section>
    </>
  );
}
