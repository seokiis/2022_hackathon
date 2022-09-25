import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, auth } from "firebase/auth";
import { get, ref, child } from "@firebase/database";
import { database } from "../firebase";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faMessage,
  faHandshakeAngle,
  faUserPlus,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import flower from "../img/꽃.jpeg";
import puppy from "../img/강아지.jpeg";
import cat from "../img/고양이.jpeg";
import sea from "../img/바다.jpeg";
import mountain from "../img/산.jpeg";
import travel from "../img/여행.jpeg";
import profiledefault from "../img/user.png";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MenuDiv = styled.div`
  width: 100%;
  padding: 20px 30px;
  border-radius: 10px;
  color: #4f4c2c;
  font-weight: bold;
  font-size: 2rem;
  margin: 10px 0;
  box-shadow: 3px 3px 3px #688984;
  font-family: "parkyongjoon";
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;
const MenuDivRow = styled.div`
  display: flex;
  width: 100%;
`;
const IconDiv = styled.div`
  float: left;
  margin-right: 20px;
`;
const UserDiv = styled.div`
  display: flex;
  width: 90%;
  height: 150px;
  align-items: center;
  justify-content: space-around;
  color: #4f4c2c;
`;
const AddProfile = styled.div`
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: lightgray;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${profiledefault};
  cursor: pointer;
  &:hover {
    background-color: #91ce9f;
  }
`;
const SpeechBubble = styled.div`
  position: relative;
  background: #4f4c2c;
  border-radius: 0.4em;
  width: 50%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-right-color: #4f4c2c;
    border-left: 0;
    border-bottom: 0;
    margin-top: -10px;
    margin-left: -20px;
  }
`;
const BubbleText = styled.span`
  color: white;
  font-family: "parkyongjoon";
  font-size: 2rem;
`;
const Kakao = styled.div`
  font-size: 1.8rem;
`;
const Youtube = styled.div`
  font-size: 1.8rem;
`;

const UserImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

function Menu() {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState({});
  const [userProfile, setUserProfile] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const navigate = useNavigate();

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
  const User = userData[userId];
  console.log(User);
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
  //console.log("");
  return (
    <Div>
      <UserDiv>
        {userData ? (
          <AddProfile>
            <UserImg src={userProfile} alt="프로필"></UserImg>
          </AddProfile>
        ) : (
          <AddProfile onClick={() => navigate("/intro")}>
            <FontAwesomeIcon
              style={{ fontSize: "4rem", color: "white" }}
              icon={faUserPlus}
            />
          </AddProfile>
        )}
        <SpeechBubble>
          <BubbleText>
            {userData ? (
              <>
                안녕하세요 <br />
                {userNickname}님!
              </>
            ) : (
              <>
                자기소개를 <br />
                작성하세요
              </>
            )}
          </BubbleText>
        </SpeechBubble>
      </UserDiv>
      <MenuNav>
        <Link to="/youtube" style={{ textDecoration: "none", width: "100%" }}>
          <MenuDiv style={{ backgroundColor: "#fffade" }}>
            <IconDiv>
              <FontAwesomeIcon style={{ color: "#F8E264" }} icon={faYoutube} />
            </IconDiv>
            유튜브
          </MenuDiv>
        </Link>
        <Link to="/sns" style={{ textDecoration: "none", width: "100%" }}>
          <MenuDiv style={{ backgroundColor: "#e2fce9" }}>
            <IconDiv>
              <FontAwesomeIcon
                style={{ color: "#9BF1B2" }}
                icon={faHandshakeAngle}
              />
            </IconDiv>
            소통방
          </MenuDiv>
        </Link>
        <MenuDivRow>
          <Link
            to="/menualkakao"
            style={{
              textDecoration: "none",
              width: "100%",
              marginRight: "20px",
            }}
          >
            <MenuDiv
              style={{
                backgroundColor: "#ecffff",
              }}
            >
              <IconDiv>
                <FontAwesomeIcon
                  style={{ color: "#93EEEE" }}
                  icon={faMessage}
                />
              </IconDiv>
              <Kakao>
                카카오톡
                <br />
                사용법
              </Kakao>
            </MenuDiv>
          </Link>
          <Link
            to="/menualyoutube"
            style={{ textDecoration: "none", width: "100%" }}
          >
            <MenuDiv style={{ backgroundColor: "#fff6ff" }}>
              <IconDiv>
                <FontAwesomeIcon
                  style={{ color: "#FBBCFB" }}
                  icon={faYoutube}
                />
              </IconDiv>
              <Youtube>
                유튜브
                <br />
                사용법
              </Youtube>
            </MenuDiv>
          </Link>
        </MenuDivRow>
        <Link
          to="/menualdownload"
          style={{ textDecoration: "none", width: "100%" }}
        >
          <MenuDiv style={{ backgroundColor: "#EAECE3" }}>
            <IconDiv>
              <FontAwesomeIcon style={{ color: "#C0CAC0" }} icon={faDownload} />
            </IconDiv>
            앱 다운로드 방법
          </MenuDiv>
        </Link>
      </MenuNav>
    </Div>
  );
}

export default Menu;
