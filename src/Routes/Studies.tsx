import styled from "styled-components";
import TechBox from "../Components/TechBoxContainer";
import { useNavigate } from "react-router-dom";
import ProjectModal from "../Components/Modal";

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
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 70vh;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
  margin-top: 15px;
`;
const Box = styled.div<{ bgColor?: string }>`
  background-color: ${(props) => props.theme.red};
`;
const STitle = styled.div`
  font-size: 30px;
  padding: 30px;
  border-bottom: 5px dashed ${(props) => props.theme.white};
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
`;
const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
const Project = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  padding: 5px;
`;

export default function Studies() {
  const navigate = useNavigate();
  const projectClick = (param: string) => {
    navigate(`/studies/${param}`);
  };
  return (
    <>
      <Wrapper>
        <ProjectModal />
        <Title>👨‍💻Projects</Title>
        <Container>
          <Box>
            <STitle>🧚Solo</STitle>
            <Projects>
              <Project onClick={() => projectClick("numbers")}>
                Numbers!
              </Project>
              <Project onClick={() => projectClick("netflix")}>
                Netflix_Cloning
              </Project>
              <Project onClick={() => projectClick("bestseller")}>
                NextJs_BestSeller
              </Project>
              <Project onClick={() => projectClick("carrot")}>
                NextJs_CarrotMarket
              </Project>
              <Project onClick={() => projectClick("profile")}>Profile</Project>
            </Projects>
          </Box>
          <Box>
            <STitle>🤼Cooperation</STitle>
          </Box>
        </Container>
      </Wrapper>
      <Wrapper>
        <Title>🖥️What I used?</Title>
        <TechBox />
      </Wrapper>
    </>
  );
}
