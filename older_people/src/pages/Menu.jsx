import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faMessage,
  faHandshakeAngle,
  faUserPlus,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

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

function Menu() {
  const [userId, setUserId] = useState("default");
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserId(uid);
      } else {
        console.log("로그인 안됨");
      }
    });
    console.log(userId);
  }, []);
  const navigate = useNavigate();
  return (
    <Div>
      <UserDiv>
        <AddProfile onClick={() => navigate("/intro")}>
          <FontAwesomeIcon
            style={{ fontSize: "4rem", color: "white" }}
            icon={faUserPlus}
          />
        </AddProfile>
        <SpeechBubble>
          <BubbleText>
            자기소개를
            <br />
            추가해봐요!
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
