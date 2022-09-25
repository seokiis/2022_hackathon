import "./App.css";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Sns from "./pages/Sns";
import IntroducePage from "./pages/IntroducePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import YoutubePage from "./pages/YoutubePage";

const Div = styled.div`
  height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <Div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* 랜딩 페이지 */}
          <Route path="/" element={<Main />}></Route>
          {/* 메인 메뉴 페이지 */}
          <Route path="/menu" element={<Menu />}></Route>
          {/* 자기 소개 페이지 */}
          <Route path="/intro/*" element={<IntroducePage />}></Route>
          {/* 유튜브 태그 페이지 */}
          <Route path="/youtube" element={<YoutubePage />}></Route>
          {/* 소통방 페이지 */}
          <Route path="/sns" element={<Sns />}></Route>
        </Routes>
      </BrowserRouter>
    </Div>
  );
}

export default App;
