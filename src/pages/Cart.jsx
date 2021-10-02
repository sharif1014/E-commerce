import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Navbar from "./../components/Navbar";
import Announcement from "./../components/Announcement";
import Footer from "./../components/Footer";
import {mobile} from "../Responsive"

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 1.25rem;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-bottom: 1.25rem;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 500;
  border: ${(props) => props.type === "filled"?"none" :"2px solid black"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  cursor: pointer;
`;

const TopTexts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopText = styled.span`
  margin: 0px 10px;
  text-decoration: underline;
  font-size: 14px;
`;

const Bottom = styled.div`
  margin: 1.25rem 0rem;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const ProductDesc = styled.div`
  padding: 20px;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid tomato;
  color: #2b0620;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #f3c8fc;
    color: #2b0620;
  }
`;

const ProductAmount = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin: 0px 10px;
  border: 2px solid teal;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h2`
  font-weight: 200;
  text-align: center;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (0)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Chechout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <ProductDesc>
                  <ProductName>
                    <b>Product Name :</b> Winter Shoe
                  </ProductName>
                  <ProductId>
                    <b>Product ID :</b> 123459352
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b>35.25
                  </ProductSize>
                </ProductDesc>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Icon>
                    <Remove />
                  </Icon>
                  <ProductAmount>10</ProductAmount>
                  <Icon>
                    <Add />
                  </Icon>
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <ProductDesc>
                  <ProductName>
                    <b>Product Name :</b> T-Shirt
                  </ProductName>
                  <ProductId>
                    <b>Product ID :</b> 1234598
                  </ProductId>
                  <ProductColor color="grey" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </ProductDesc>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Icon>
                    <Remove />
                  </Icon>
                  <ProductAmount>8</ProductAmount>
                  <Icon>
                    <Add />
                  </Icon>
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
