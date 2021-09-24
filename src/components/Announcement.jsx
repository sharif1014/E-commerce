import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  height: 2rem;
  justify-content: center;
  background: teal;
  color: white;
`;
const Announcement = () => {
  return <Container>30% Flate Discount on Every Sale Items !</Container>;
};
export default Announcement;
