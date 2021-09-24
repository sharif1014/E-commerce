import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: tomato;
  position: relative;
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
`;
const Slider = () => {
  return (
    <Container>
      <Wrapper>
        <Arrow>
          <ArrowLeftOutlined />
        </Arrow>
        <Arrow>
          <ArrowRightOutlined />
        </Arrow>
      </Wrapper>
    </Container>
  );
};

export default Slider;
