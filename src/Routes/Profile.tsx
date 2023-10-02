import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.tomato};
  min-height: 100vh;
  color: ${(props) => props.theme.white};
  font-weight: 900;
`;

const Title = styled.div`
  font-size: 80px;
  padding: 30px;
`;

const Main = styled.div`
  font-size: 50px;
  margin-left: 60px;
  margin-right: 60px;
  display: flex;
  flex-direction: row;
`;

const Photo = styled.div`
  font-weight: 700;
  font-size: 100px;
  background-color: ${(props) => props.theme.white};
  text-align: left;
  width: 45%;
  height: 70vh;
  color: ${(props) => props.theme.tomato};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailContainer = styled.div`
  width: 45%;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
`;
const Detail = styled.div`
  font-size: 50px;
`;
const DetailTitle = styled.div`
  width: 450px;
  font-size: 25px;
  align-self: flex-end;
  border-left: 2px solid ${(props) => props.theme.white};
  padding-left: 5px;
  margin-bottom: 40px;
  margin-top: 15px;
`;

export default function Profile() {
  return (
    <>
      <Container>
        <Title>👨‍💻Koo YunChann</Title>
        <Main>
          <Photo>Photo</Photo>
          <DetailContainer>
            <Detail>23 years old</Detail>
            <DetailTitle>March 12th 2001</DetailTitle>
            <Detail>Brief History</Detail>
            <DetailTitle>
              이매초등학교 6학년 만기졸업
              <br />
              매송중학교 3학년 만기졸업
              <br />
              태원고등학교 3학년 만기졸업
              <br />
              한국외국어대학교 적기 입학
              <br />
              육군 제5 보병사단 병장 만기전역
              <br />
              한국외국어대학교 복학
              <br />
              UMC 5th Member {`(WEB)`}
            </DetailTitle>
          </DetailContainer>
        </Main>
      </Container>
    </>
  );
}
