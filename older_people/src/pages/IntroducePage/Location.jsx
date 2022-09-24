import React from "react";
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
function Location() {
  const navigate = useNavigate();
  return (
    <Div>
      <WhereQuestion>
        할머니, 할아버지 <br />
        어디 사세요?
      </WhereQuestion>
      <WhereAnswerDiv>
        <WhereButton>북구</WhereButton>
        <WhereButton>동구</WhereButton>
        <WhereButton>서구</WhereButton>
        <WhereButton>남구</WhereButton>
        <WhereButton>중구</WhereButton>
        <WhereButton>달서구</WhereButton>
        <WhereButton>수성구</WhereButton>
        <WhereButton>달성군</WhereButton>
      </WhereAnswerDiv>
      <BottomDiv>
        <Logo src={logo} alt="로고"></Logo>
        <NextDiv>
          <NextButton onClick={() => navigate("/intro/nickname")}>
            다음
          </NextButton>
          <TriangleButton></TriangleButton>
        </NextDiv>
      </BottomDiv>
    </Div>
  );
}

export default Location;
