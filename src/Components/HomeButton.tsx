import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Button = styled(motion.div)<{ bgColor: string }>`
  height: 100vh;
  padding: 30px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.white};
  user-select: none;
  font-weight: 900;
  :hover {
    cursor: pointer;
    scale: 1.05;
  }
`;
const ButtonText = styled(motion.div)`
  font-size: 100px;
  width: 50%;
  margin-left: 100px;
  margin-top: 50px;
`;
const InButton = styled(motion.ul)`
  border-left: 3px solid ${(props) => props.theme.white};
  padding-left: 30px;
  align-self: flex-end;
  margin-bottom: 100px;
`;
const DetailLists = styled.li`
  font-size: 50px;
  margin-right: 200px;
`;

const buttonVariants: Variants = {
  offscreen: {
    y: -200,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 2,
    },
  },
};

interface propTypes {
  text: string;
  detailLists: string[];
  bgColor: string;
  navigateText: string;
}
export default function HomeButton(props: propTypes) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${props.navigateText}`);
  };
  return (
    <>
      <Button
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.5 }}
        bgColor={`${props.bgColor}`}
      >
        <ButtonText onClick={handleClick} variants={buttonVariants}>
          {props.text}
        </ButtonText>
        <InButton variants={buttonVariants}>
          {props.detailLists.map((list) => (
            <DetailLists>{list}</DetailLists>
          ))}
        </InButton>
      </Button>
    </>
  );
}
