import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/logo2.png";

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

const WhereQuestion = styled.h1`
  font-family: "parkyongjoon";
  font-size: 4em;
  color: white;
  position: absolute;
  top: 35px;
`;

const WhereAnswerDiv = styled.div`
  height: 50%;
  position: absolute;
  bottom: 15%;
  width: 92%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const WhereButton = styled.button`
  font-family: "parkyongjoon";
  border: none;
  background-color: white;
  font-weight: bold;
  font-size: 2.6rem;
  padding: 20px 10px;
  border-radius: 8px;
  box-shadow: 3px 3px 3px gray;

  opacity: ${(props) => (props.value === props.item ? 0.6 : "none")};

  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
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

const dummyData = [
  "북구",
  "동구",
  "서구",
  "남구",
  "중구",
  "달서구",
  "수성구",
  "달성군",
];
function Location({ userLoc, handleUserLoc }) {
  const navigate = useNavigate();

  return (
    <Div>
      <WhereQuestion>
        할머니, 할아버지 <br />
        어디 사세요?
      </WhereQuestion>
      <WhereAnswerDiv>
        {dummyData.map((item) => {
          return (
            <WhereButton
              value={userLoc}
              item={item}
              onClick={() => handleUserLoc(item)}
            >
              {item}
            </WhereButton>
          );
        })}
      </WhereAnswerDiv>
      <BottomDiv>
        <Logo src={logo} alt="로고"></Logo>
        <NextDiv>
          <NextButton onClick={() => navigate("/intro/nickname")}>
            다음
          </NextButton>
          <TriangleButton></TriangleButton>
        </NextDiv>
        <PreDiv>
          <TriangleButtonBack></TriangleButtonBack>
          <PreButton onClick={() => navigate("/intro/introduce")}>
            이전
          </PreButton>
        </PreDiv>
      </BottomDiv>
    </Div>
  );
}

export default React.memo(Location);
