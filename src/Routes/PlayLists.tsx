import styled from "styled-components";

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
const Secret = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
`;

export default function PlayLists() {
  return (
    <>
      <Wrapper>
        <Title>🎼What I like</Title>
        <Secret>
          <Title>히히 비밀</Title>
        </Secret>
      </Wrapper>
    </>
  );
}
