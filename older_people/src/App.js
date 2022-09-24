import "./App.css";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Nickname from "./pages/Nickname";
import Introduce from "./pages/Introduce";
import Location from "./pages/Location";
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
          <Route path="/" element={<Main />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/nickname" element={<Nickname />}></Route>
          <Route path="/introduce" element={<Introduce />}></Route>
          <Route path="/location" element={<Location />}></Route>
          <Route path="/youtube" element={<YoutubePage />}></Route>
        </Routes>
      </BrowserRouter>
    </Div>
  );
}

export default App;
