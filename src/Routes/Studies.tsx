import styled from "styled-components";
import TechBox from "../Components/TechBoxContainer";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.orange.light};
  min-height: 100vh;
  font-weight: 900;
  color: ${(props) => props.theme.white};
`;
const Title = styled.div`
  font-size: 60px;
  padding: 30px;
`;

export default function Studies() {
  return (
    <>
      <Wrapper>
        <Title>🖥️What I use?</Title>
        <TechBox />
      </Wrapper>
    </>
  );
}
