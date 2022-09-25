import React from "react";
import styled from "styled-components";
import startimg from "../img/start.jpeg";
import logo from "../img/logo2.png";
import { Link } from "react-router-dom";

import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

const Div = styled.div`
  width: 100%;
  height: 100%;
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
  font-family: "parkyongjoon";
`;

const StartImg = styled.img`
  width: 55%;
  border-radius: 50%;
`;

const Welcome = styled.h2`
  font-size: 2em;
  color: white;
`;
const Welcome2 = styled.h1`
  font-size: 4em;
  color: white;
  margin-top: 0;
`;
const Logo = styled.img`
  padding: 10px 20px;
  height: 90px;
`;

const BottomDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NextButton = styled.button`
  border: none;
  background: none;
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 10px;
  color: white;
  font-family: "parkyongjoon";
  cursor: pointer;
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
  border-color: transparent transparent transparent white;
`;
function Main() {
  const signIn = () => {
    const auth = getAuth();
    signInAnonymously(auth)
      .then(() => {
        console.log("로그인 되었습니다");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };
  return (
    <Div>
      <StartImg src={startimg} alt="시작일러스트"></StartImg>
      <Welcome>Welcome</Welcome>
      <Welcome2>환영합니다</Welcome2>
      <BottomDiv>
        <Logo src={logo} alt="로고"></Logo>
        <NextDiv>
          <Link to="/menu">
            <NextButton onClick={signIn}>다음</NextButton>
          </Link>
          <TriangleButton></TriangleButton>
        </NextDiv>
      </BottomDiv>
    </Div>
  );
}

export default Main;
