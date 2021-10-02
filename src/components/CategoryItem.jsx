import styled from "styled-components";
import { mobile } from "../Responsive";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit:cover;
  ${mobile({ height: "20vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 1.3rem;
`;
const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: white;
  color: teal;
  font-weight: 600;
  cursor: pointer;
  transition: all 1s ease;
  &:hover{
      background-color:teal;
      color:white;
      padding: 10px 15px;
  }
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
