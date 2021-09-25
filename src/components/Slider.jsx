import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { sliderItems } from "../data";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f3dfdf;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  position: absolute;
  left: ${(props) => props.direction === "left" && ".8rem"};
  right: ${(props) => props.direction === "right" && ".8rem"};
  top: 0;
  bottom: 0;
  margin: auto;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition:all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex* (-100)}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 3.125rem;
`;
const Title = styled.h1`
  font-size: 4.4rem;
`;
const Desc = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  margin: 3rem 0;
  letter-spacing: 2px;
`;
const Button = styled.button`
  border: 1px solid teal;
  padding: 10px;
  font-size: 1.125rem;
  background-color:#fff;
  color:#3b052b;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
    // setInterval(handleClick,5000);
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
      {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
      ))}
 </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
