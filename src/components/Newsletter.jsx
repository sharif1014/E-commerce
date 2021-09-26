import { Send } from '@material-ui/icons';
import React from 'react'
import  styled  from 'styled-components';


const Container =styled.div`
height: 60vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #fceae7;
`
const Title =styled.h1`
font-size: 4.3rem;
color:#024242;
letter-spacing:2px;
margin-bottom: 20px;
`
const Desc =styled.p`
font-size: 1.25rem;
letter-spacing:2px;
color:#252424;
margin-bottom: 20px;
`
const InputContainer =styled.div`
width: 40%;
background-color: white;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: space-between;
`
const Input =styled.input`
border: none;
flex: 8;
&:focus{
outline:none;
}
`
const Button =styled.button`
border: none;
flex: 1;
background-color: teal;
color: white;
cursor: pointer;
transition:all .5s ease;
&:hover{
    background-color: #024242;
    color: yellow;
}
`


const Newsletter = () => {
    return (
        <Container>
          <Title>NEWSLETTER</Title>
          <Desc>This is our newsletter</Desc>  
          <InputContainer>
          <Input placeholder="Enter Your Email Here"/>
          <Button>
              <Send/>
          </Button>
          </InputContainer>
        </Container>
    )
}

export default Newsletter
