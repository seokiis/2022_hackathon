import React from "react";
import styled from "styled-components";
import startimg from "../img/start.jpeg";
import logo from "../img/logo.png";

const Div = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right top,
    #9dff71,
    #a7fa74,
    #b0f677,
    #b8f17b,
    #beed7f,
    #c2ed7f,
    #c6ec7e,
    #caec7e,
    #cef077,
    #d3f470,
    #d8f768,
    #ddfb5f
  );
`;

const StartImg = styled.img`
  width: 55%;
  border-radius: 50%;
  margin-top: 40%;
`;

const BottomDiv = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Welcome = styled.h2`
  font-size: 2em;
  color: #4f4c2c;
`;
const Welcome2 = styled.h1`
  font-size: 4em;
  color: #4f4c2c;
  margin-top: 0;
  //수정 필요
  margin-bottom: 13%;
`;
const Logo = styled.img`
  padding: 10px 20px;
  height: 70px;
`;
const NextButton = styled.button`
  border: none;
  background: none;
  font-weight: bold;
  font-size: 1.5rem;
`;

const NextDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  right: 20px;
`;

const TriangleButton = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 15px;
  border-color: transparent transparent transparent #9999cf;
`;
function Main() {
  return (
    <Div>
      <StartImg src={startimg} alt="시작일러스트"></StartImg>
      <Welcome>Welcome</Welcome>
      <Welcome2>환영합니다</Welcome2>
      <BottomDiv>
        <Logo src={logo} alt="로고"></Logo>
        <NextDiv>
          <NextButton>다음</NextButton>
          <TriangleButton></TriangleButton>
        </NextDiv>
      </BottomDiv>
    </Div>
  );
}

export default Main;
