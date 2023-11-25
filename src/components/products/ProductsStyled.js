import styled from 'styled-components'

export const OrderedHeaderListElements = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  align-items: center;
  color: #595c61;
  border: 1px solid;
  border-radius:8px;
  margin:75px;
  margin-bottom:0;
`
export const HeaderItem = styled.p`
font-size:20px;
margin-left: ${({ width }) => width};
`

export const AddBUtton=styled.button`
background-color: transparent;
color: #245719;
font-weight:bold;
border: 2px solid #245719;
border-radius:8px;
width:100px;
margin-left:685px;
margin-top:25px;
height:40px;
`

export const OrderItemsContainer=styled.div`
margin-left:85px
`

export const TitleNavItems = styled.div`
  display: flex;
  margin-left: 90px;
  margin-top:35px;
`;

export const SearchContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
border: 1px solid black;
border-radius:8px;
`
