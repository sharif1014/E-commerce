import styled from "styled-components";
import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";

const Container = styled.div`
margin-top:1rem;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #9eb8b6;
`;
const Left = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 30px;
  cursor: pointer;
`;
const Desc = styled.p`
  line-height: 1.5rem;
`;
const SocialContainer = styled.div`
 margin-top:1.5rem;
  display: flex;

`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #${(props) => props.bg};
    transform: scale(1.1);
  }
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;

`;
const Title = styled.h3`
  margin-bottom: 30px;
 
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin: 5px 0px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
`;

const ContactItem =styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
font-weight: 500;
`
const Payment =styled.img`
width: 50%;
cursor: pointer;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LOGO.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          odio praesentium possimus ducimus iusto laudantium debitis? Porro ad
          velit nobis nihil alias repellat sint ex, iure reiciendis obcaecati
          nemo beatae!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999" bg="071557">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F" bg="ee211a">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="3B5999" bg="0527bd">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="55ACEE" bg="065f88">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
      <ContactItem><Room style={{marginRight:"10px"}}/> Rd No. 13 Adabar, Dhaka</ContactItem>
      <ContactItem><Phone style={{marginRight:"10px"}}/> +1 234 567 89</ContactItem>
      <ContactItem><MailOutline style={{marginRight:"10px"}}/> example@gmail.com</ContactItem>
      <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
