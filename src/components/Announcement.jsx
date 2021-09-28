import React from "react";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  justify-content: center;
  background: #075555;
  
`;
const Span =styled.span`
color: white;
`

const Announcement = () => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor:false,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Welcome to Fashion world !","Buy and get 30% discount !","Thanks for shopping !","Enjoy your days !"],
    });
  }, []);

  return <Container>
    <Span ref={textRef}/>
    </Container>;
};
export default Announcement;
