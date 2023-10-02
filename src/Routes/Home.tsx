import styled from "styled-components";
import { theme } from "../theme";
import HomeButton from "../Components/HomeButton";
const Wrapper = styled.div`
  background-color: tomato;
`;

export default function Home() {
  return (
    <>
      <Wrapper>
        <HomeButton
          navigateText="profile"
          bgColor={`${theme.tomato}`}
          text="👨‍💻profile"
          detailLists={["Name", "Age", "Brief History"]}
        />
        <HomeButton
          navigateText="timetable"
          bgColor={`${theme.sky}`}
          text="⏱️TimeTable"
          detailLists={["TimeTable of 23-2 Semester"]}
        />
        <HomeButton
          navigateText="playlists"
          bgColor={`${theme.green}`}
          text="🎼PlayLists"
          detailLists={["My Favorite Songs"]}
        />
      </Wrapper>
    </>
  );
}