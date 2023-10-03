import styled from "styled-components";
import { SongLists } from "../Assets/songs";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.green};
`;
const Title = styled.div`
  color: ${(props) => props.theme.white};
  font-weight: 900;
  font-size: 70px;
  padding: 30px;
`;
const Player = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const Next = styled.button`
  height: 100px;
  width: 100px;
  border: 5px solid ${(props) => props.theme.white};
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.white};
  font-size: 50px;
`;

export default function PlayLists() {
  const [songIndex, setSongIndex] = useState(1);
  const handleClickNext = () => {
    setSongIndex((prev) => (prev + 1) % 4);
  };

  return (
    <>
      <Wrapper>
        <Title>🎼{SongLists.title[songIndex]}</Title>
        <Player>
          <Next onClick={handleClickNext}>{`<<`}</Next>
          <iframe
            key={SongLists.title[songIndex]}
            width="840"
            height="473"
            src={`${SongLists.iframe[songIndex]}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <Next onClick={handleClickNext}>{`>>`}</Next>
        </Player>
      </Wrapper>
    </>
  );
}
