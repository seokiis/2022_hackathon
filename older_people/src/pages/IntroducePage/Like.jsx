import React from "react";
import styled from "styled-components";
import logo from "../../img/logo2.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Img = styled.div`
  width: 10rem;
  aspect-ratio: 1/1;
  border-radius: 50%;

  background-image: ${(props) => props.backgroundImg};
  background-size: cover;
  background-position: center;
  background-color: white;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  cursor: pointer;

  opacity: ${(props) => (props.value === props.text ? 0.6 : "none")};

  &:hover {
    opacity: 0.6;
  }
`;

const LickItems = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
`;

const dummyData = ["산", "바다", "꽃", "여행", "강아지", "고양이"];

const LikeItem = ({ backgroundImg, text, value, onClick }) => {
  return (
    <Wrapper>
      <Img
        value={value}
        text={text}
        backgroundImg={backgroundImg}
        onClick={() => onClick(text)}
      />
      <h2>{text}</h2>
    </Wrapper>
  );
};

const Like = () => {
  const navigate = useNavigate();
  const [like, setLike] = useState("");

  const onClick = (item) => {
    setLike(item);

    // surver request
  };

  return (
    <Div>
      <LikeText>내가 좋아하는 것은?</LikeText>
      <LickItems>
        {dummyData.map((it) => {
          return (
            <LikeItem
              value={like}
              backgroundImg={`url(${require(`../../img/${it}.jpeg`)})`}
              text={it}
              onClick={onClick}
            />
          );
        })}
      </LickItems>
      <BottomDiv>
        <Logo src={logo} alt="로고"></Logo>
        <NextDiv>
          <NextButton onClick={() => navigate("/intro/like")}>다음</NextButton>
          <TriangleButton />
        </NextDiv>
      </BottomDiv>
    </Div>
  );
};
export default Like;
