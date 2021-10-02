import React from 'react'
import Navbar from './../components/Navbar';
import Announcement from './../components/Announcement';
import Newsletter from './../components/Newsletter';
import Footer from './../components/Footer';
import  styled  from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import {mobile} from "../Responsive"

const Container =styled.div``

const Wrapper =styled.div`
padding: 3rem;
display: flex;
justify-content: space-between;
${mobile({ padding: "10px", flexDirection:"column" })}
`

const ImgContainer =styled.div`
flex: 1;
`

const Image =styled.img`
width: 100%;
${mobile({ height: "40vh" })}
`

const InfoContainer =styled.div`
flex: 1;
padding:0rem 2rem;
${mobile({ padding: "10px" })}
`

const Title =styled.h1`
font-weight: 200;
margin: 2rem 0rem;
`

const Desc =styled.p`
margin: 1.25rem 0rem;
`

const Price =styled.span`
font-weight: 300;
font-size: 2.5rem;
`

const FilterContainer =styled.div`
width: 50%;
margin: 1.75rem 0rem;
display: flex;
justify-content:space-between;
${mobile({ width: "100%" })}
`

const Filter =styled.div`
display: flex;
align-items: center;
;
`

const FilterTitle =styled.h1`
font-weight: 400;
font-size: 1.25rem;
margin-right:5px;
`

const FilterColor =styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
margin:0px 5px;
background-color: ${props=>props.color};
cursor: pointer;
`

const FilterSize =styled.select`
margin-left: 10px;
border:1px solid teal;
padding: 5px;

&:focus{
    outline:none;
}
`

const FilterSizeOption =styled.option`
text-align:center;
`

const AddContainer = styled.div`
width: 50%;
margin: 3rem 0rem;
display: flex;
justify-content:space-between;
${mobile({ width: "100%" })}
`

const AmountContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Icon = styled.div`
width: 2rem;
height: 2rem;
border-radius: 50%;
background-color: #f3c8fc;
border:2px solid tomato;
color: #2b0620;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all .5s ease;

&:hover{
    background-color: #2b0620;
    color: #edd9f1;
}
`
const Amount = styled.span`
width: 2rem;
height: 2rem;
border-radius: 50%;
margin: 0px 10px;
border:2px solid teal;
font-weight: 700;
display: flex;
align-items: center;
justify-content: center;
`

const Button = styled.button`
padding: 10px 15px;
border: 2px solid teal;
font-weight: 500;
background-color: white;
cursor: pointer;
transition: all .5s ease;

&:hover{
    background-color: #fae8e8;
}
`


const Product = () => {
    return (
        <Container>
          <Navbar/>
          <Announcement/>
          <Wrapper>
              <ImgContainer>
              <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
              </ImgContainer>
              <InfoContainer>
                  <Title>Denim Jeans</Title>
                  <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet dicta dolore aliquid quisquam possimus soluta eaque nisi aspernatur molestias eius itaque natus, sequi expedita quaerat deserunt velit iure totam!</Desc>
                  <Price>$ 30</Price>
                  <FilterContainer>
                      <Filter>
                          <FilterTitle>Color</FilterTitle>
                              <FilterColor color="black"/>
                              <FilterColor color="darkblue"/>
                              <FilterColor color="grey"/>                       
                      </Filter>
                      <Filter>
                      <FilterTitle>Size</FilterTitle>
                          <FilterSize>
                              <FilterSizeOption>XSM</FilterSizeOption>
                              <FilterSizeOption>SM</FilterSizeOption>
                              <FilterSizeOption>M</FilterSizeOption>
                              <FilterSizeOption>L</FilterSizeOption>
                              <FilterSizeOption>XL</FilterSizeOption>
                              <FilterSizeOption>XXL</FilterSizeOption>
                          </FilterSize>
                      </Filter>
                  </FilterContainer>
                  <AddContainer>
                      <AmountContainer>
                          <Icon>
                          <Remove/>
                          </Icon>
                          <Amount>1</Amount>
                          <Icon>
                          <Add/>
                          </Icon>
                      </AmountContainer>
                      <Button>ADD TO CART</Button>
                  </AddContainer>
              </InfoContainer>
          </Wrapper>
          <Newsletter/>  
          <Footer/>  
        </Container>
    )
}

export default Product
