import React from "react";
import styled from "styled-components";
import logo from "../img/logo2.png";

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

const MainHead = styled.h1`
  font-family:'parkyongjoon';
  font-size: 4em;
  color: white;
  position:absolute;
  top:15px;
`;

const VideoBox=styled.div`
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    width:90%;
    height: 70%;
    bottom:90px;
    display:flex;
    border:none;
    background-color: white;
    border-radius:8px;
`;

const Video=styled.div`
`;

const Iframe=styled.iframe`
    width:400px;
    height:250px;
`

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
  font-family:'parkyongjoon';
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
function YoutubePage() {
    return (
        <Div>
            <MainHead>유튜브 영상 모음집</MainHead>
            <VideoBox>
                <Video>
                    <Iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/M7lc1UVf-VE"
                    allowfullscreen>
                    </Iframe>
                </Video>
            </VideoBox>
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

export default YoutubePage;

