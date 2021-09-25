import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 3.75rem;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
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
  font-size: 0.85rem;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 1px solid gray;
  background: white;
  padding: 5px;
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  border: none;
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
`;
const MenuItem = styled.div`
  font-weight: 500;
  font-size: 0.85rem;
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
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
