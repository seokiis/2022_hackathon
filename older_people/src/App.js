import "./App.css";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
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
          <Route path="/" element={<Main />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>
      </BrowserRouter>
    </Div>
  );
}

export default App;
