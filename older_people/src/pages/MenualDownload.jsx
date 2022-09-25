import React from "react";
import styled from "styled-components";
import logo from "../img/logo2.png";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to left bottom,
    #98cfa1,
    #91ce9f,
    #8acd9e,
    #82cb9c,
    #7aca9b,
    #72c898,
    #69c594,
    #60c391,
    #55c08a,
    #48bc84,
    #3ab97d,
    #29b576
  );
`;

const MainHead = styled.h1`
  font-family: "parkyongjoon";
  font-size: 4em;
  color: white;
`;

const Iframe = styled.iframe`
  margin: 10px 0;
`;

const VideoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  height: 70%;
  display: flex;
  border: none;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 60px;
  margin-top: 10px;
`;

const Logo = styled.img`
  padding: 10px 20px;
  height: 90px;
`;

const BottomDiv = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

const NextButton = styled.button`
  border: none;
  background: none;

  font-weight: bold;
  font-size: 1.5rem;

  margin-left: 10px;
  color: #ff6b54;
  font-family: "parkyongjoon";
  cursor: pointer;
`;

const NextDiv = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 20px;
`;

function MenualDownload() {
  const navigate = useNavigate();
  return (
    <Div>
      <MainHead>앱 다운로드 방법</MainHead>
      <VideoBox>
        <Iframe
          title="youtube"
          type="text/html"
          width="80%"
          height="40%"
          src={"https://youtube.com/embed/HG7gkpHodyk"}
          allow="fullscreen"
        ></Iframe>
      </VideoBox>
      <BottomDiv>
        <Logo src={logo} alt="로고"></Logo>
        <NextDiv>
          <NextButton onClick={() => navigate("/menu")}>다봤어요!</NextButton>
        </NextDiv>
      </BottomDiv>
    </Div>
  );
}

export default MenualDownload;
