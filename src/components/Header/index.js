import {
    Title,
    Name,
    HeaderContainer,
    LeftItem,
    NavbarLeftItemsContainer,
    NavbarRightItems,
    UserContainer,
  } from './StyledComponents'
  import './index.css'
  import {BsCart} from 'react-icons/bs'
  import {FaChevronDown} from 'react-icons/fa'
  
  const Header = () => (
    <HeaderContainer>
      <Title>Reeco</Title>
      <NavbarLeftItemsContainer>
        <LeftItem>Store</LeftItem>
        <LeftItem>Order</LeftItem>
        <LeftItem>Analytics</LeftItem>
      </NavbarLeftItemsContainer>
      <NavbarRightItems>
        <BsCart className="icon" />
        <UserContainer>
          <Name>Hello, James</Name>
          <FaChevronDown className="icon" />
        </UserContainer>
      </NavbarRightItems>
    </HeaderContainer>
  )
    
  export default Header
  