
import { Item, OrderItem, StyledProductImage,ItemUpdated,StyledButton ,EditContainer,EditPara,Items,ModalContainer,Header,UpperElements,EditItemsContainer,CloseButton,Message,ButtonItem,ButtonsContainer} from './ProductItemDetails';
import { MdOutlineDone } from "react-icons/md";
import {IoMdClose} from "react-icons/io"
import Popup from 'reactjs-popup'


const ProductItemDetails=props=>{
    const {productDetails,DoneButtonClicked,missingProductUrgentClicked, missingProductClicked}=props
    const {id,name,brand,price,image,quantity,status}=productDetails
    const { text, bgColor } = status;

    const onDoneButtonClicked=()=>{
        DoneButtonClicked(id)
    }

    const  missingProductUrgent=()=>{
        missingProductUrgentClicked(id)   
    }

    const  missingProduct=()=>{
        missingProductClicked(id)   
    }

    return(
        <OrderItem>
            <StyledProductImage src={image} alt="Product Image" className="url" />
            <Item width="255px" >{name}</Item>
            <Item width="155px" >{brand}</Item>
            <Item width="125px" >{price}</Item>
            <Item width="150px">{quantity}</Item>
            <Item width="155px">{price*quantity}</Item>
            <ItemUpdated bgcolor={bgColor} width="125px" >{text}</ItemUpdated>
            <StyledButton onClick={onDoneButtonClicked} color={bgColor}><MdOutlineDone/></StyledButton>
            <StyledButton>
            <Popup
        modal
        trigger={<IoMdClose/>}>
        {close => (
          <ModalContainer>
            <UpperElements>
            <Header>Missing product</Header>
            <CloseButton
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </CloseButton>
            </UpperElements>
            <Message>Is 'Chicken Breast Fillets, Boneless...'urgent?</Message>
            <ButtonsContainer>
                <ButtonItem onClick={missingProductUrgent}>Yes</ButtonItem>
                <ButtonItem  onClick={missingProduct}>No</ButtonItem>
            </ButtonsContainer>
          </ModalContainer>
        )}
      </Popup></StyledButton>
            <StyledButton >
            <Popup
        modal
        trigger={<button className='edit-button'>Edit</button>}>
        {close => (
          <EditContainer>
            <Header>{name}</Header>
            <EditPara>{brand}</EditPara>
            <EditItemsContainer>
            <img src={image}  alt='itemimage'/>
            <EditPara>price{price}</EditPara>
            <EditPara>Quantity{quantity}</EditPara>
            <EditPara>Toatal{price*quantity}</EditPara>
            </EditItemsContainer>
            <Header>Choose Reason</Header>
            <Items>
            <EditPara>Missing product</EditPara>
            <EditPara>Quantity is same</EditPara>
            <EditPara>Price is not the same</EditPara>
            <EditPara>Other</EditPara>
            </Items>
          </EditContainer>
        )}
      </Popup>
            </StyledButton>
            </OrderItem>
    )
}

export default ProductItemDetails