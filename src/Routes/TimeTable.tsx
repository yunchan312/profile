import styled from "styled-components";
import "./TimeTable.css";
import { theme } from "../theme";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.sky};
  min-height: 100vh;
  color: ${(props) => props.theme.white};
  font-weight: 900;
`;
const Title = styled.div`
  font-size: 70px;
  padding: 30px;
`;
const Table = styled.table`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`;
const Tr = styled.tr`
  border: 1px solid ${(props) => props.theme.white};
`;
const Th = styled.th<{ theWidth?: string }>`
  background-color: ${(props) => props.theme.tomato};
  width: ${(props) => (props.theWidth ? props.theWidth : "100px")};
  border: 1px solid ${(props) => props.theme.white};
`;
const Td = styled.td<{ tBgColor?: string }>`
  background-color: ${(props) => (props.tBgColor ? props.tBgColor : "none")};
  text-align: center;
  height: 40px;
  border: 1px solid ${(props) => props.theme.white};
`;

export default function TimTable() {
  return (
    <>
      <Wrapper>
        <Title>⏱️23-2 Semester</Title>
        <Table>
          <thead>
            <Tr>
              <Th theWidth="20px">#</Th>
              <Th>MON</Th>
              <Th>TUE</Th>
              <Th>WED</Th>
              <Th>THU</Th>
              <Th>FRI</Th>
            </Tr>
          </thead>
          <tbody>
            <Tr>
              <Td>09:00</Td>
              <Td></Td>
              <Td></Td>
              <Td rowSpan={2} tBgColor={theme.brown}>
                Algorithm
              </Td>
              <Td></Td>
              <Td rowSpan={2} tBgColor={theme.orange}>
                Object-Oriented
                <br /> Programming
              </Td>
            </Tr>
            <Tr>
              <Td>10:00</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>11:00</Td>
              <Td rowSpan={2} tBgColor={theme.purple}>
                Probability and Statistics
              </Td>
              <Td></Td>
              <Td rowSpan={1} tBgColor={theme.orange}>
                Object-Oriented
                <br />
                Programming
              </Td>
              <Td></Td>
              <Td rowSpan={1} tBgColor={theme.brown}>
                Algorithm
              </Td>
            </Tr>
            <Tr>
              <Td>12:00</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td rowSpan={1} tBgColor={theme.purple}>
                Probability and Statistics
              </Td>
            </Tr>
            <Tr>
              <Td>13:00</Td>
              <Td></Td>
              <Td rowSpan={2} tBgColor={theme.green}>
                HUFS Career
              </Td>
              <Td></Td>
              <Td></Td>
              <Td rowSpan={2} tBgColor={theme.kaki}>
                Micro Processor
              </Td>
            </Tr>
            <Tr>
              <Td>14:00</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>15:00</Td>
              <Td rowSpan={2} tBgColor={theme.kaki}>
                Micro Processor
              </Td>
              <Td rowSpan={2} tBgColor={theme.red}>
                Studies of Yong-In City
              </Td>
              <Td rowSpan={3} tBgColor={theme.gray}>
                WEB Programming
              </Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>16:00</Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>17:00</Td>
              <Td tBgColor={theme.blue}>TAB_AI</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>18:00</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>19:00</Td>
              <Td></Td>
              <Td rowSpan={2} tBgColor={theme.pink}>
                TAB WEB
              </Td>
              <Td rowSpan={2} tBgColor={theme.yellow}>
                UMC WEB
              </Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>20:00</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </tbody>
        </Table>
      </Wrapper>
    </>
  );
}
