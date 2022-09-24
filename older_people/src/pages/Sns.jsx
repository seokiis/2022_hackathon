import React, { useState } from "react";
import styled from "styled-components";
import "../snsWave.css";
import profileimg from "../img/user.png";
import flower from "../img/꽃.jpeg";
import puppy from "../img/강아지.jpeg";
import cat from "../img/고양이.jpeg";
import sea from "../img/바다.jpeg";
import mountain from "../img/산.jpeg";
import travel from "../img/여행.jpeg";
import happy from "../img/emoji/happy.png";
import laughing from "../img/emoji/laughing.png";
import wow from "../img/emoji/wow.png";
import angry from "../img/emoji/angry.png";
import sad from "../img/emoji/sad.png";
import heart from "../img/heart.png";
import defaultEmoji from "../img/emoji/happy.png";

const Div = styled.div`
  width: 100%;
  height: 100vh;
`;
const HeaderBackground = styled.div`
  margin: 0;
  padding: 0;
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

const Profile = styled.img`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 140px;
  height: 140px;
`;

const Emoji = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 2%;
  left: 22%;
`;
const PostingDiv = styled.div`
  position: absolute;
  display: flex;
  top: 13%;
  right: 10%;
  width: 45%;
  height: 15%;
`;
const Posting = styled.textarea`
  width: 80%;
  height: 100%;
  border-radius: 8px 0 0 8px;
  border: none;
  box-shadow: 1px 1px 1px gray;
  padding: 10px 10px;
  font-size: 1.1rem;
  font-family: "parkyongjoon";
  &:focus {
    outline: none;
  }
`;

const RegisterButton = styled.button`
  width: 20%;
  height: 100%;
  border: none;
  border-radius: 0 8px 8px 0;
  box-shadow: 1px 1px 1px gray;
  color: white;
  background-color: #2b5c53;
  font-family: "parkyongjoon";
  font-size: 1.7rem;
  &:disabled {
    background-color: gray;
  }
`;
const PostingElement = styled.div`
  background-color: white;
  width: 100%;
  height: 33.333%;
  border: 1px solid #2b5c53;
  box-shadow: 2px 2px 1px #2b5c53;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 20px;
  position: relative;
`;

const PostingProfile = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

const PostingText = styled.p`
  font-family: "parkyongjoon";
  font-weight: bold;
  width: 80%;
  height: 80%;
  font-size: 1.5rem;
`;

const PostingEmoji = styled.img`
  width: 35px;
  position: absolute;
  top: 2%;
  left: 13%;
`;

const LikeDiv = styled.div`
  position: absolute;
  bottom: 5%;
  right: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PostingLike = styled.img`
  width: 30px;
`;
const NumberOfLike = styled.span`
  margin: 0 10px;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "parkyongjoon";
  color: red;
`;
const Board = styled.div`
  width: 100%;
  height: 60vh;
  padding: 0 30px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;
function Sns() {
  const [post, setPost] = useState("");
  function PostChange(e) {
    setPost(e.target.value);
  }

  return (
    <Div>
      <HeaderBackground>
        <section>
          <div className="wave"></div>
        </section>
        <Profile src={profileimg} alt="프로필"></Profile>
        <Emoji src={defaultEmoji}></Emoji>
        <PostingDiv>
          <Posting
            onChange={PostChange}
            maxLength="100"
            placeholder="좌측 하단에 이전 버튼을 눌러서 자기소개를 추가하고 게시글을 업로드해보세요!"
          ></Posting>
          <RegisterButton disabled>등록</RegisterButton>
        </PostingDiv>
      </HeaderBackground>
      <Board>
        {postData.map((item, index) => {
          return (
            <PostingElement key={index}>
              <PostingProfile src={item.profile} alt="프로필"></PostingProfile>
              <PostingText>{item.text}</PostingText>
              <PostingEmoji src={item.feeling} alt="사용자 기분"></PostingEmoji>
              <LikeDiv>
                <PostingLike src={heart}></PostingLike>
                <NumberOfLike>{item.heart}</NumberOfLike>
              </LikeDiv>
            </PostingElement>
          );
        })}
      </Board>
    </Div>
  );
}

const postData = [
  {
    profile: flower,
    nickname: "꽃분이",
    location: "북구",
    feeling: happy,
    text: "안녕하세요안녕하세요",
    heart: 2,
  },
  {
    profile: puppy,
    nickname: "꽃분이",
    location: "북구",
    feeling: sad,
    text: "안녕하세요안녕하세요",
    heart: 2,
  },
  {
    profile: cat,
    nickname: "꽃분이",
    location: "북구",
    feeling: wow,
    text: "안녕하세요안녕하세요",
    heart: 2,
  },
  {
    profile: mountain,
    nickname: "꽃분이",
    location: "북구",
    feeling: happy,
    text: "안녕하세요안녕하세요",
    heart: 2,
  },
  {
    profile: sea,
    nickname: "꽃분이",
    location: "북구",
    feeling: angry,
    text: "안녕하세요안녕하세요",
    heart: 2,
  },
  {
    profile: travel,
    nickname: "꽃분이",
    location: "북구",
    feeling: sad,
    text: "안녕하세요안녕하세요",
    heart: 2,
  },
  {
    profile: flower,
    nickname: "꽃분이",
    location: "북구",
    feeling: happy,
    text: "안녕하세요안녕하세요",
    heart: 2,
  },
];
export default Sns;
