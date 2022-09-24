import "./App.css";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import IntroducePage from "./pages/IntroducePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        </Routes>
      </BrowserRouter>
    </Div>
  );
}

export default App;
