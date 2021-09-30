import styled from "styled-components";
import Navbar from "./../components/Navbar";
import Announcement from "./../components/Announcement";
import Products from "./../components/Products";
import Newsletter from "./../components/Newsletter";
import Footer from "./../components/Footer";

const Container = styled.div`
 
`;
const Title = styled.h1`
  margin: 1.25rem;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 1.25rem;
`;
const FiltetText = styled.span`
  font-weight: 600;
  margin-right: 1rem;
`;
const Select =styled.select`
padding: 10px;
margin-right:15px;
`
const Option =styled.option``
const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FiltetText>Filter Products:</FiltetText>
          <Select>
          <Option disabled selected>Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
              <Option>Grey</Option>
          </Select>
          <Select>
          <Option disabled selected>Size</Option>
              <Option>XSM</Option>
              <Option>SM</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FiltetText>Sort Products:</FiltetText>
          <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
          </Select>

        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
