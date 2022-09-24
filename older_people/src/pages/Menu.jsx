import React from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faMessage,
  faHandshakeAngle,
  faUserPlus,
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
function Menu() {
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
        <MenuDiv style={{ backgroundColor: "#e2fce9" }}>
          <IconDiv>
            <FontAwesomeIcon
              style={{ color: "#9BF1B2" }}
              icon={faHandshakeAngle}
            />
          </IconDiv>
          소통방
        </MenuDiv>
        <MenuDivRow>
          <MenuDiv
            style={{
              backgroundColor: "#ecffff",
              marginRight: "20px",
            }}
          >
            <IconDiv>
              <FontAwesomeIcon style={{ color: "#93EEEE" }} icon={faMessage} />
            </IconDiv>
            카카오톡
            <br />
            사용법
          </MenuDiv>
          <MenuDiv style={{ backgroundColor: "#fff6ff" }}>
            <IconDiv>
              <FontAwesomeIcon style={{ color: "#FBBCFB" }} icon={faYoutube} />
            </IconDiv>
            유튜브
            <br />
            사용법
          </MenuDiv>
        </MenuDivRow>
      </MenuNav>
    </Div>
  );
}

export default Menu;
