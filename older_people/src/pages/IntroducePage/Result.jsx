import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/logo2.png";

import auth from "../../firebase.js";

//components
import Img from "../../components/Img";

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

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

const IntroSpan = styled.span`
  font-family: "parkyongjoon";
  font-size: 3em;
  color: white;
`;

const BottomDiv = styled.div`
  bottom: 0;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const Logo = styled.img`
  padding: 10px 20px;
  height: 90px;
`;

const NextButton = styled.button`
  border: none;
  background: none;
  font-weight: bold;
  font-size: 1.5rem;
  font-family: "parkyongjoon";
  color: #ff6b54;
  margin-right: 10px;
  cursor: pointer;
`;

const NextDiv = styled.div`
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
  border-color: transparent transparent transparent #ff6b54;
`;

const PreButton = styled.button`
  border: none;
  background: none;
  font-weight: bold;
  font-size: 1.5rem;
  font-family: "parkyongjoon";
  color: white;
  margin-left: 10px;
  cursor: pointer;
`;

const PreDiv = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 20px;
`;

const TriangleButtonBack = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 15px;
  transform: rotate(180deg);
  border-color: transparent transparent transparent #fff;
`;

const Result = ({ userData }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // post 요청
    console.log(userData);
    // menu로 이동
    navigate("/menu");
  };
  return (
    <Div>
      <MainDiv>
        <Img
          width={"18rem"}
          backgroundImg={`url(${require(`../../img/${userData.like}.jpeg`)})`}
          hover={false}
          text={false}
        />
        <IntroSpan>
          {userData.loc} 사시는
          <br />
          {userData.nickname}님,
          <br />
          자기 소개를 완료했어요.
        </IntroSpan>
      </MainDiv>
      <BottomDiv>
        <Logo src={logo} alt="로고"></Logo>
        <NextDiv>
          <NextButton onClick={handleSubmit}>다했어요!</NextButton>
          <TriangleButton />
        </NextDiv>
        <PreDiv>
          <TriangleButtonBack></TriangleButtonBack>
          <PreButton onClick={() => navigate("/intro/like")}>이전</PreButton>
        </PreDiv>
      </BottomDiv>
    </Div>
  );
};

export default React.memo(Result);
