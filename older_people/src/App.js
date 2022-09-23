import "./App.css";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Main from "./pages/Main";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Div = styled.div`
  width: 400px;
  height: 700px;
`;
function App() {
  return (
    <Div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </Div>
  );
}

export default App;
