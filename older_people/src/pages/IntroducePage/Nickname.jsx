import React from "react";
import styled from "styled-components";
import logo from "../../img/logo2.png";
import { useNavigate } from "react-router-dom";

const NicknameInput = styled.input`
  width: 20rem;
  height: 4rem;
  font-size: 3em;
  color: #000;
  font-family: "parkyongjun";
  margin-top: 0%;
  margin-bottom: 20%;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
`;

const ReportEditor = ({ value, handleChange }) => {
  return (
    <div className="ReportEditor">
      <div>
        <NicknameInput
          value={value}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

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

const NicknameText = styled.h1`
  font-size: 4em;
  color: white;
  margin-bottom: 5%;
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

function Nickname({ userNickname, handleNickname }) {
  const navigate = useNavigate();

  return (
    <Div>
      <NicknameText>??? ??????(??????)????</NicknameText>
      <ReportEditor value={userNickname} handleChange={handleNickname} />
      <BottomDiv>
        <Logo src={logo} alt="??????"></Logo>
        <NextDiv>
          <NextButton onClick={() => navigate("/intro/like")}>??????</NextButton>
          <TriangleButton></TriangleButton>
        </NextDiv>
        <PreDiv>
          <TriangleButtonBack></TriangleButtonBack>
          <PreButton onClick={() => navigate("/intro/location")}>
            ??????
          </PreButton>
        </PreDiv>
      </BottomDiv>
    </Div>
  );
}

export default React.memo(Nickname);
