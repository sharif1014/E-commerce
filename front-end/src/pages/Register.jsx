import { AccountBox, LockOpen, Send, MailOutline } from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../Responsive"


const Container = styled.div`
  height: 100vh;
  margin-top: 1.25rem;
  padding: 1.3rem;
  background-color: #9eb8b6;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ backgroundColor:"white" })}
`;
const Wrapper =styled.div`
 width: 40%;
 height:100%;
  padding: 20px;
  ${mobile({ width: "75%" })}
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #3d746f;
  padding: 1rem 1rem;
  box-sizing: border-box;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.75);
`;

const Title = styled.h2`
  color: #ad240c;
  font-weight: 500;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;
const ImgContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 1.25rem;
`;
const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;
const Label = styled.h3`
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #661304;
  margin-bottom: 1rem;
`;

const InputContainer = styled.div`
  width: 100%;
  background-color: white;
  padding: 6px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #ad240c;
  margin-bottom: 1.25rem;
  ${mobile({ width: "95%",padding:"3px 6px" })}
`;
const Icon = styled.div`
  flex: 1;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: tomato;
  margin-right: 10px;
  ${mobile({ display: "none" })}
`;
const Input = styled.input`
  flex: 8;
  padding: 6px 0px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
width:30%;
  font-size: 1rem;
  letter-spacing: 2px;
  padding: 5px 10px;
  border: none;
  border-radius: 15px;
  background-color: #052b2b;
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: white;
    color: #052b2b;
  }
  ${mobile({ width: "100%",alignItems:"center" })}
`;
const Link =styled.a`
margin: 1rem 0rem;
font-size: 1rem;
display:block;
cursor: pointer;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
      <Form>
        <Title>Create an account</Title>
        <ImgContainer>
          <Image src="https://cdn.pixabay.com/photo/2016/08/20/05/36/avatar-1606914_960_720.png" />
        </ImgContainer>
        <Label>Full Name</Label>
        <InputContainer>
          <Icon>
            <AccountBox />
          </Icon>
          <Input type="text" placeholder="Type full name here" />
        </InputContainer>
        <Label>Username</Label>
        <InputContainer>
          <Icon>
            <AccountBox />
          </Icon>
          <Input type="text" placeholder="Type username here" />
        </InputContainer>
        <Label>Email</Label>
        <InputContainer>
          <Icon>
            <MailOutline />
          </Icon>
          <Input type="email" placeholder="Type Email here" />
        </InputContainer>
        <Label>Password</Label>
        <InputContainer>
          <Icon>
            <LockOpen />
          </Icon>
          <Input type="password" placeholder="Type password here" />
        </InputContainer>

        <Button>
          SIGN UP
          <Send />
        </Button>
        <Link>Have an account login?</Link>
      </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
