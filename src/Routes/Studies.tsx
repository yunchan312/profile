import styled from "styled-components";
import { theme } from "../theme";
import { Python } from "Assets/Icons";

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
const BoxContainer = styled.div`
  width: 90vw;
  height: 70vh;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
`;
const Box = styled.div<{ boxColor?: string }>`
  background-color: ${(props) =>
    props.boxColor ? props.boxColor : props.theme.kaki};
  padding: 10px;
`;
const BoxTitle = styled.div`
  font-size: 35px;
  text-align: center;
`;
const BoxItems = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
`;
const BoxItem = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  width: 50%;
  padding: 10px;
`;
const BoxText = styled.div`
  font-size: 25px;
  text-align: center;
  margin-left: 10px;
`;

export default function Studies() {
  return (
    <>
      <Wrapper>
        <Title>🖥️Computer Science</Title>
        <BoxContainer>
          <Box>
            <BoxTitle>🔤Computer Language</BoxTitle>
            <BoxItems>
              <BoxItem>
                <Python width="30" height="30" />
                <BoxText>Python</BoxText>
              </BoxItem>
            </BoxItems>
          </Box>
          <Box boxColor={theme.green}>🌍WEB</Box>
          <Box>🪬Artificial Intelligence</Box>
        </BoxContainer>
      </Wrapper>
    </>
  );
}
