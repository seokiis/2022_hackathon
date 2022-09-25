import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../img/logo2.png";
import { Navigate, useNavigate, Link } from "react-router-dom";


const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
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

const KeySelector = styled.div`
  width: 90%;

  align-items: center;
  justify-content: center;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0.8rem;

  margin-bottom: 1rem;
`;

const Key = styled.button`
  font-family: "parkyongjoon";
  border: none;
  background-color: white;

  font-weight: bold;
  font-size: 1.1rem;

  width: 100%;
  height: 100%;
  padding: 5px 8px;

  border-radius: 8px;
  box-shadow: 3px 3px 3px gray;
`;

const Iframe = styled.iframe`
  margin: 10px 0;
`;

const VideoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: scroll;
  width: 90%;
  height: 55%;
  display: flex;
  border: none;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 60px;
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
  left: 3%;
`;

const TriangleButton = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 15px 10px 0;
  border-color: transparent #ff6b54 transparent #ff6b54;
  margin-right: 5px;
`;
const dummyData = [
  "건강",
  "정치",
  "트로트",
  "임영웅",
  "전국노래자랑",
  "노후",
  "박막례",
  "여행",
  "반려동물",
];

function YoutubePage() {
  const [data, setData] = useState([]);
  const [sub, setSub] = useState("임영웅");
  const apikey = process.env.REACT_APP_GCP_API_KEY;
  useEffect(() => {
    async function fetchData() {
      await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${sub}&type=video&key=${apikey}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result.items);
          console.log(result);
        });
    }
    fetchData();
  }, [sub]);
  console.log(sub);
  return (
    <Div>
      <MainHead>유튜브 영상 모음집</MainHead>
      <KeySelector>
        {dummyData.map((it, index) => {
          return (
            <Key key={index} onClick={() => setSub(it)}>
              {it}
            </Key>
          );
        })}
      </KeySelector>
      <VideoBox>
        <div style={{ height: "100%" }}>
          {data?.map((data, index) => {
            let url =
              "https://www.youtube.com/embed/" + String(data.id.videoId);
            return (
              <Iframe
                key={index}
                title="youtube"
                type="text/html"
                width="80%"
                height="40%"
                src={url}
                allow="fullscreen"
              ></Iframe>
            );
          })}
        </div>
      </VideoBox>

      <BottomDiv>
        <Logo src={logo} alt="로고"></Logo>
        <NextDiv>
          <TriangleButton></TriangleButton>
          <Link to="/menu">
            <NextButton>다봤어요!</NextButton>
          </Link>
        </NextDiv>
      </BottomDiv>
    </Div>
  );
}

export default YoutubePage;
