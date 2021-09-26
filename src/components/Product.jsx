import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import  styled  from 'styled-components';


const Info = styled.div `
width:100%;
height:100%;
background-color:rgba(0,0,0,.3);
opacity:0;
position: absolute;
top: 0;
left:0;
display:flex;
align-items: center;
justify-content: center;
z-index: 2;
transition:all .5s ease;
cursor: pointer;
`
const Container = styled.div `
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items: center;
justify-content: center;
background-color:#edf6f8;
position:relative;
&:hover ${Info}{
    opacity:1;
}
`
const Circle =styled.div `
width:200px;
height:200px;
border-radius: 50%;
background-color: white;
position: absolute;
`
const Image =styled.img `
    height:75%;
   z-index: 2;
`

const Icon =styled.div `
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
margin: 10px;
display:flex;
align-items: center;
justify-content: center;
cursor: pointer;
color:#fc6247;
transition:all .5s ease;
&:hover{
    background-color: #fdf2f2;
    color:#f53b1a; 
    transform:scale(1.1);
}
`

const Product = ({item}) => {
    return (
        <Container>
            <Circle/>
          <Image src={item.img} />
          <Info>
              <Icon>
                  <ShoppingCartOutlined/>
              </Icon>
              <Icon>
                  <SearchOutlined/>
              </Icon>
              <Icon>
                  <FavoriteBorder/>
              </Icon>
          </Info>
        </Container>
    )
}

export default Product
