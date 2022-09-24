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

const BottomDiv = styled.div`
  bottom: 0;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const Introduce_ment = styled.h1`
  font-family: "parkyongjoon";
  font-size: 3em;
  color: white;
  margin-top: 0%;
  //수정 필요
  margin-bottom: 20%;
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
  border-color: transparent transparent transparent #fff;
`;

function Introduce() {
  const navigate = useNavigate();
  return (
    <Div>
      <Introduce_ment>
        간단한 질문들로
        <br />
        자신을 표현해 보세요
      </Introduce_ment>
      <BottomDiv>
        <Logo src={logo} alt="로고"></Logo>
        <NextDiv>
          <NextButton onClick={() => navigate("/intro/location")}>
            다음
          </NextButton>
          <TriangleButton></TriangleButton>
        </NextDiv>
      </BottomDiv>
    </Div>
  );
}

export default Introduce;
