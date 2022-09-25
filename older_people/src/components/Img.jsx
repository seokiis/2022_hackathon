import styled from "styled-components";
import React from "react";

const ImgDiv = styled.div`
  width: ${(props) => props.width};
  aspect-ratio: 1/1;
  border-radius: 50%;

  background-image: ${(props) => props.backgroundImg};
  background-size: cover;
  background-position: center;
  background-color: white;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  cursor: pointer;

  // like page 위한 하드 코딩 opacity 없애고 싶을 시 false 로 설정
  opacity: ${(props) => (props.value === props.text ? 0.6 : "none")};

  &:hover {
    opacity: ${(props) => (props.hover ? 0.6 : "none")};
  }
`;

const Img = ({ width, backgroundImg, value, text, onClick, hover }) => {
  return (
    <ImgDiv
      width={width}
      backgroundImg={backgroundImg}
      value={value}
      text={text}
      onClick={onClick}
      hover={hover}
    ></ImgDiv>
  );
};

export default React.memo(Img);
