import styled from 'styled-components'


export const OrderItem = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  padding: 10px;
  align-items: center;
  color: #595c61;
  border: 1px solid;
  margin: 0 75px; 
  
`;
export const StyledProductImage = styled.img`
  width: 3%; 
  height: 3%; 
`;

export const ProductImage = styled.img`
  width: 100%; 
  height: auto; 
  `

export const Item = styled.p`
  font-size: 15px;
  width: ${({ width }) => width};
`

export const ItemUpdated = styled.p`
  font-size: 15px;
  background-color: ${({ bgcolor }) => bgcolor}; 
  border-radius: 8px;
  height:30px;
  width:${({ width }) => width}; 
  color:#ffffff;
  margin-right:60px;
  text-align:center;
`;

export const StyledButton=styled.button`
margin-right:30px;
color: ${({ color }) => color}; 
background-color:transparent;
outline:none;
font-weight:bold;
border-style:none;
border:none;
`

export const ModalContainer=styled.div`
width:400px;
background-color:#ffffff;
border:1px solid #202020;
border-radius:5px;
padding:15px;
color:black;
`

export const UpperElements = styled.div`
  display: flex;
  justify-content: space-between;
`;



export const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Message=styled.p`
font-size35px:
`
export const ButtonItem=styled.button`
font-weight:bold;
margin-left:5px;
margin-right:5px;
border: none;
outline: none;
`


export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;


export const Header=styled.h1`
font-size:20px;
`



export const EditPara=styled.p`
font-size:20px;
margin:10px;
`

export const EditContainer = styled.div`
background-color: #ffffff;
  padding: 10px;
`;


export const EditItemsContainer = styled.div`
display: flex;
align-items:center;
`;




export const Items = styled.div`
  display: flex;
`;