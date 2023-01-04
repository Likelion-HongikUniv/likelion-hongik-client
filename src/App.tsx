import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { CommunityPage } from "./pages/CommunityPage";
import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";
import { MyPage } from "./pages/Mypage";
import { RecruitPage } from "./pages/RecruitPage";
import { WritingPage } from "./pages/WritingPage";
import GlobalStyle from "./styles/GlobalStyle";

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
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/write/:userid" element={<WritingPage />} />
          </Routes>
        </RecoilRoot>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
