import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 4rem;
  background: #c261e9;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5px;
`;
const Language = styled.span`
  font-size: 1rem;
`;
const SearchContainer = styled.div`
  border: 1px solid gray;
  background: white;
  border-radius: 15px;
  padding: 5px 10px;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 3px;
  &:focus {
    outline: none;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #000;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
`;
const MenuItem = styled.div`
  font-weight: 500;
  font-size: 1rem;
  color: #000;
  margin-left: 1.25rem;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search Here" />
            <Search
              style={{
                color: "#373338",
                textAlign: "center",
                cursor: "pointer",
                fontSize: "18px",
              }}
            ></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LOGO.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTRATION</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={3} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
