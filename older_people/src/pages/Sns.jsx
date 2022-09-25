import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../snsWave.css";
import { Link } from "react-router-dom";
// auth
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, child, get, push } from "firebase/database";
import { database } from "../firebase";
//img
import defaultProfileImg from "../img/user.png";
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
  border-radius: 50%;
  top: 10%;
  left: 10%;
  width: 140px;
  height: 140px;
`;

const PostingDiv = styled.div`
  position: absolute;
  display: flex;
  top: 10%;
  right: 10%;
  width: 50%;
  height: 140px;
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
  //align-items: center;
  padding: 5px 10px;
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
  text-align: left;
  margin-left: 20px;
  width: 80%;
  height: 80%;
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const LikeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  right: 15%;
`;
const PostingName = styled.span`
  font-weight: bold;
  font-family: "parkyongjoon";
  color: #4f4c2c;
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
  margin-top: -20px;
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
  width: 20%;
  height: 10%;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 3%;
`;

const TriangleButton = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 15px 10px 0;
  border-color: transparent white transparent white;
  margin-right: 10px;
`;

const PostingFooter = styled.div`
  position: absolute;
  bottom: 7%;
  left: 28%;
  width: 80%;
  height: 20%;
  display: flex;
  align-items: center;
`;

function Sns() {
  const [post, setPost] = useState("");
  const [postList, setPostList] = useState([]);
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState({});
  const [userProfile, setUserProfile] = useState("");
  const [userNickname, setUserNickname] = useState("");

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        setUserId(uid);
      } else {
        console.log("err");
      }
    });
  }, []);

  useEffect(() => {
    const Ref = ref(database);
    get(child(Ref, "users/" + userId))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUserData(Object(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const Ref = ref(database);
    get(child(Ref, "posting/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setPostList(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const User = userData[userId];
  console.log(postList);
  useEffect(() => {
    if (User) {
      setUserNickname(User["nickname"]);
    }
  }, [userData]);

  useEffect(() => {
    if (User) {
      switch (User["profilePicture"]) {
        case "강아지":
          setUserProfile(puppy);
          return;
        case "고양이":
          setUserProfile(cat);
          return;
        case "꽃":
          setUserProfile(flower);
          return;
        case "바다":
          setUserProfile(sea);
          return;
        case "산":
          setUserProfile(mountain);
          return;
        case "여행":
          setUserProfile(travel);
          return;
      }
    }
  }, [userData]);

  function PostChange(e) {
    setPost(e.target.value);
  }
  function PostSubmit(e) {
    const Ref = ref(database, "posting/");
    push(Ref, {
      publisher: userNickname,
      profilePicture: userProfile,
      like: 2,
      text: post,
    });
  }

  return (
    <Div>
      <HeaderBackground>
        <section>
          <div className="wave"></div>
        </section>
        {userData ? (
          <Profile src={userProfile} alt="프로필"></Profile>
        ) : (
          <Profile
            src={
              userData.profilePicture
                ? require(`../img/${userData.profilePicture}`)
                : defaultProfileImg
            }
            alt="프로필"
          ></Profile>
        )}
        <PostingDiv>
          <Posting
            onChange={PostChange}
            maxLength="24"
            placeholder="좌측 상단에 이전 버튼을 눌러서 자기소개를 추가하고 게시글을 업로드해보세요!"
          ></Posting>
          <RegisterButton onClick={PostSubmit} disabled={!userData}>
            등록
          </RegisterButton>
        </PostingDiv>
        <NextDiv>
          <TriangleButton></TriangleButton>
          <Link to="/menu">
            <NextButton>이전</NextButton>
          </Link>
        </NextDiv>
      </HeaderBackground>
      <Board>
        {postList?.map((item, index) => {
          return (
            <PostingElement key={index}>
              <PostingProfile
                src={item.profilePicture}
                alt="프로필"
              ></PostingProfile>
              <PostingText>{item.text}</PostingText>
              <PostingFooter>
                <PostingName>{item.publisher}</PostingName>
                <LikeDiv>
                  <PostingLike src={heart}></PostingLike>
                  <NumberOfLike>{item.like}</NumberOfLike>
                </LikeDiv>
              </PostingFooter>
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
    text: "안녕하세요안녕하세요안녕하세요안녕하세요안녕하세",
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
    text: "안녕하세요안녕하세요안녕하세요",
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
