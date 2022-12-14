import React from "react";
import styled from "styled-components";
import logo from "../../img/logo2.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

//components
import Img from "../../components/Img";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  font-family: "parkyongjoon";
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

const BottomDiv = styled.div`
  bottom: 0;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const LikeText = styled.h1`
  font-size: 4em;
  color: white;
  margin-bottom: 5%;
  text-align: center;
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
  color: white;
  margin-right: 10px;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LikeItems = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
`;

const dummyData = ["???", "??????", "???", "??????", "?????????", "?????????"];

const LikeItem = ({ backgroundImg, text, value, onClick }) => {
  return (
    <Wrapper>
      <Img
        width={"10rem"}
        value={value}
        text={text}
        backgroundImg={backgroundImg}
        hover={true}
        onClick={() => onClick(text)}
      />
      <h2>{text}</h2>
    </Wrapper>
  );
};

const Like = ({ userLike, handleUserLike }) => {
  const navigate = useNavigate();
  return (
    <Div>
      <LikeText>?????? ???????????? ???????</LikeText>
      <LikeItems>
        {dummyData.map((it) => {
          return (
            <LikeItem
              value={userLike}
              backgroundImg={`url(${require(`../../img/${it}.jpeg`)})`}
              text={it}
              onClick={handleUserLike}
            />
          );
        })}
      </LikeItems>
      <BottomDiv>
        <Logo src={logo} alt="??????"></Logo>
        <NextDiv>
          <NextButton onClick={() => navigate("/intro/result")}>
            ??????
          </NextButton>
          <TriangleButton />
        </NextDiv>
        <PreDiv>
          <TriangleButtonBack></TriangleButtonBack>
          <PreButton onClick={() => navigate("/intro/nickname")}>
            ??????
          </PreButton>
        </PreDiv>
      </BottomDiv>
    </Div>
  );
};
export default React.memo(Like);
