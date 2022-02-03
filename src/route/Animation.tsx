import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
  position: relative;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 50vw;
`;
const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  height: 200px;
  border-radius: 5px;
  cursor: pointer;
`;
const BoxLeftDiag = styled(Box)<{ id: string }>`
  transform-origin: ${(props) =>
    props.id === "1" ? "right bottom" : "left top"};
`;

const BoxRightDiag = styled(Box)<{ id: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
`;
const Button = styled(motion.button)`
  position: absolute;
  bottom: 50px;
  background-color: white;
  border-style: none;
  padding: 5px;
  color: rgb(12, 56, 151);
  font-size: 14px;
  font-weight: bold;
  border-radius: 2px;
  cursor: pointer;
  :active {
    color: rgb(190, 50, 50);
  }
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const hoverVariants = {
  hover: { scale: 1.1 },
};
const clickVariants = {
  tap: { scale: 1.2 },
};
function Animation() {
  console.log("animation");
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  const [id, setId] = useState<null | string>(null);
  return (
    <Wrapper>
      <Grid>
        <BoxLeftDiag
          onClick={() => setId("1")}
          id={"1"}
          layoutId={"1"}
          variants={hoverVariants}
          whileHover="hover"
        />
        <BoxRightDiag id={"2"}>
          {clicked ? <Circle layoutId="circle" /> : null}
        </BoxRightDiag>
        <BoxRightDiag id={"3"}>
          {!clicked ? <Circle layoutId="circle" /> : null}
        </BoxRightDiag>
        <BoxLeftDiag
          onClick={() => setId("4")}
          id={"4"}
          layoutId={"4"}
          variants={hoverVariants}
          whileHover="hover"
        />
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box
              layoutId={id}
              style={{ width: 300, height: 200, backgroundColor: "white" }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Button variants={clickVariants} whileTap="tap" onClick={toggleClicked}>
        Switch
      </Button>
    </Wrapper>
  );
}
export default Animation;
