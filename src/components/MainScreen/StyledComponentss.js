import styled from 'styled-components'


export const MainScreenContainer=styled.div`
padding:2px
`

export const OrderHeaderContainer = styled.div`
display:flex;
`
export const OrderDetails=styled.div`
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
padding-left:65px;
padding-right:65px
`

export const OrderDetailsContainer = styled.div`
padding-left:1px;
`
export const OrderHeading=styled.p`
font-size:20px
color:#545e57;
padding-top:5px;
`
export const  OrderNumber=styled.p`
font-size:20px
color:#545e57;
text-decoration: underline;
padding-top:5px;
font-style:underline;
`

export const  OrderTitle=styled.h1`
font-size:20px

`

export const OrderStatusDetails=styled.div`
display:flex;
justify-content:space-between;

`

export const ButtonsContainer=styled.div`
display:flex;
`

export const ButtonItem = styled.button`
  border-radius: 15px;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  font-weight:bold;
  margin-right:20px;
  margin-left:20px;
  height:30px;
  width:${(props)=>props.width};
`;

export const OrderStatusItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-left: 45px;
  padding-right: 45px;
  margin-top:20px;
  border: 2px solid #707373;
  border-radius:15px;
  margin-right:60px;
  margin-left:60px;

`;

export const OrderStatusItem=styled.div`
padding:20px;
display:flex;
flex-direction:column;
align-items:center;
`

export const ItemHeader=styled.h1`
font-size:20px;
color:#484f45;
`

export const Line = styled.div`
  margin-top:15px;
  border: 1px solid #52504a;
  height: 120px;
`


export const ItemDetails=styled.p`
font-size:20px;
color:#202020;
font-weight:bold;
`

export const ListItemsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 50%;
  list-style: none;
`;

export const ListItem=styled.li`
margin:5px
`