import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { CommunityPage } from "./pages/CommunityPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage";
import { MyPage } from "./pages/MyPage/Mypage";
import { RecruitPage } from "./pages/RecruitPage";
import GlobalStyle from "./styles/GlobalStyle";
import { LoginDetailPage } from "./pages/LoginPage/LoginDetailPage";
import { CompletePage } from "./pages/LoginPage/CompletePage";
import { InfoEditPage } from "./pages/MyPage/InfoEditPage";

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
            <Route path="/logindetail" element={<LoginDetailPage />} />
            <Route path="/logincomplete" element={<CompletePage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/myPageEdit" element={<InfoEditPage />} />
          </Routes>
        </RecoilRoot>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
