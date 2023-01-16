import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { CommunityPage } from "./pages/CommunityPage";
import { LoginDetailPage } from "./pages/LoginPage/LoginDetailPage";
import { CompletePage } from "./pages/LoginPage/CompletePage";
import { InfoEditPage } from "./pages/MyPage/InfoEditPage";
import { PostPage } from "./pages/PostPage";
import { MainPage } from "./pages/MainPage";
import { RecruitPage } from "./pages/RecruitPage";
import { WritingPage } from "./pages/WritingPage";
import GlobalStyle from "./styles/GlobalStyle";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MyPage } from "./pages/MyPage/Mypage";
import { MyPostPage } from "./pages/MyPostPage";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/recruit" element={<RecruitPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/community/:categoryName" element={<CommunityPage />} />
            <Route path="/logindetail" element={<LoginDetailPage />} />
            <Route path="/logincomplete" element={<CompletePage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/myPagePost" element={<MyPostPage />} />
            <Route path="/myPageEdit" element={<InfoEditPage />} />
            <Route path="/write/:userid" element={<WritingPage />} />
          </Routes>
        </RecoilRoot>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
