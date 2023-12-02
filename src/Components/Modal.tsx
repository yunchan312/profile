import styled from "styled-components";
import { useNavigate, useMatch, PathMatch } from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalItems = styled.div`
  background-color: ${(props) => props.theme.red};
`;
const ModalTitle = styled.div`
  font-size: 30px;
  padding: 50px;
`;

export default function ProjectModal() {
  const isMatch: PathMatch<string> | null = useMatch("/studies/:id");
  const navigate = useNavigate();
  const overlayClicked = () => {
    navigate("/studies");
  };
  return (
    <>
      {isMatch ? (
        <Wrapper onClick={overlayClicked}>
          <ModalItems>
            <ModalTitle>hello</ModalTitle>
          </ModalItems>
        </Wrapper>
      ) : null}
    </>
  );
}
