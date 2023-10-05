import styled from "styled-components";
import { theme } from "../theme";
import {
  Typescript,
  HTML,
  CSS,
  Javascript,
  ReactIcon,
  IconNextjs,
  IconReactquery,
  IconTailwind,
  IconFramer,
  IconReacthookform,
  IconStyledcomponents,
} from "Assets/Icons";

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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const BoxItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
`;
const BoxText = styled.div`
  font-size: 20px;
  text-align: left;
  margin-left: 10px;
`;

export default function Studies() {
  return (
    <>
      <Wrapper>
        <Title>🖥️Computer Science</Title>
        <BoxContainer>
          <Box>
            <BoxTitle>🌍WEB</BoxTitle>
            <BoxItems>
              <BoxItem>
                <HTML width="30px" height="30px" />
                <BoxText>HTML</BoxText>
              </BoxItem>

              <BoxItem>
                <CSS width="30px" height="30px" />
                <BoxText>CSS</BoxText>
              </BoxItem>

              <BoxItem>
                <Typescript width="30px" height="30px" />
                <BoxText>TypeScript</BoxText>
              </BoxItem>
              <BoxItem>
                <Javascript width="30px" height="30px" />
                <BoxText>JavaScript</BoxText>
              </BoxItem>
            </BoxItems>
          </Box>
          <Box boxColor={theme.green}>
            <BoxTitle>⛓️FrameWorkes</BoxTitle>
            <BoxItems>
              <BoxItem>
                <ReactIcon width="40px" height="40px" />
                <BoxText>React</BoxText>
              </BoxItem>
              <BoxItem>
                <IconNextjs width="35px" height="35px" />
                <BoxText>Next.Js</BoxText>
              </BoxItem>
            </BoxItems>
          </Box>
          <Box>
            <BoxTitle>📚Libraries</BoxTitle>
            <BoxItems>
              <BoxItem>
                <IconReactquery width="40px" height="40px" />
                <BoxText>
                  React
                  <br />
                  Query
                </BoxText>
              </BoxItem>
              <BoxItem>
                <IconFramer width="35px" height="35px" />
                <BoxText>FramerMotion</BoxText>
              </BoxItem>
              <BoxItem>
                <IconStyledcomponents width="35px" height="35px" />
                <BoxText>
                  Styled
                  <br />
                  Components
                </BoxText>
              </BoxItem>
              <BoxItem>
                <IconReacthookform width="35px" height="35px" />
                <BoxText>ReactHookForm</BoxText>
              </BoxItem>
              <BoxItem>
                <IconTailwind width="35px" height="35px" />
                <BoxText>TailwindCss</BoxText>
              </BoxItem>
              <BoxItem>
                <ReactIcon width="40px" height="40px" />
                <BoxText>Recoil</BoxText>
              </BoxItem>
            </BoxItems>
          </Box>
        </BoxContainer>
      </Wrapper>
    </>
  );
}
