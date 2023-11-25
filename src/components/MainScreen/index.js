import Header from '../Header';
import Products from '../products'
import { GiFruitBowl, GiStairsCake, GiWineBottle, GiPopcorn } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa";
import { PiIceCreamDuotone, PiHandSoapDuotone } from "react-icons/pi";
import {
  OrderHeaderContainer, MainScreenContainer, OrderDetailsContainer, OrderHeading, OrderNumber,
  OrderStatusDetails, OrderTitle, ButtonsContainer, ButtonItem, OrderStatusItemsContainer, 
  OrderStatusItem, ItemHeader, ItemDetails, Line, ListItemsContainer, ListItem, OrderDetails,
} from './StyledComponentss';

import './index.css';

const MainScreen = () => {
    const renderOrderStatusView = () => (<>
        <OrderDetailsContainer>
                    <OrderDetails>
                    <OrderHeaderContainer>
                        <OrderHeading>Orders</OrderHeading>
                        <FaAngleRight className='icon'/>
                        <OrderNumber>Order 32457ABC</OrderNumber>
                        </OrderHeaderContainer>
                        <OrderStatusDetails>
                        <OrderTitle>Order 32457ABC</OrderTitle>
                        <ButtonsContainer>
                            <ButtonItem type="button" width="85px" color="#054516" bgcolor="#ffffff">Back</ButtonItem>
                            <ButtonItem type="button" width="150px" color="#ffffff" bgcolor="#054516">Approve order</ButtonItem>
                        </ButtonsContainer>
                        </OrderStatusDetails>
                        </OrderDetails>
                        <OrderStatusItemsContainer>
                            <OrderStatusItem><ItemHeader>Supplier</ItemHeader>
                                <ItemDetails>East coasts fruits & vegetables</ItemDetails></OrderStatusItem>
                            <Line></Line>
                            <OrderStatusItem><ItemHeader>Shipping date</ItemHeader>
                                <ItemDetails>Thu, Feb 10 </ItemDetails> </OrderStatusItem>
                            <Line></Line>
                            <OrderStatusItem><ItemHeader>Total </ItemHeader>
                                <ItemDetails>$15,028.3</ItemDetails></OrderStatusItem>
                            <Line></Line>
                            <OrderStatusItem>
                                <ItemHeader>Category</ItemHeader>
                                <ListItemsContainer>
                                    <ListItem><GiFruitBowl /></ListItem>
                                    <ListItem><GiWineBottle/></ListItem>
                                    <ListItem><GiPopcorn /></ListItem>
                                    <ListItem><GiStairsCake/></ListItem>
                                    <ListItem><PiHandSoapDuotone/></ListItem>
                                    <ListItem><PiIceCreamDuotone/></ListItem>
                                </ListItemsContainer>
                            </OrderStatusItem>
                            <Line></Line>
                        <OrderStatusItem> <ItemHeader>Department </ItemHeader>
                                <ItemDetails>300-444-678 </ItemDetails></OrderStatusItem>
                            <Line></Line>
                            <OrderStatusItem><ItemHeader> status</ItemHeader>
                            <ItemDetails> Awaiting your approval </ItemDetails></OrderStatusItem>
                        </OrderStatusItemsContainer>
                </OrderDetailsContainer>
                </>
    );
    
    return (
        <>
        <MainScreenContainer>
          <Header />
          {renderOrderStatusView()}
        </MainScreenContainer>
        <Products/>
        </>
      );
    };
    
    export default MainScreen;