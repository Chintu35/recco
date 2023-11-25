  import React, { Component } from 'react';
  import './index.css'
  import { CiSearch } from 'react-icons/ci';
  import { IoPrintOutline } from 'react-icons/io5';
  import ProductItemDetails from '../ProductItemDetails'
  import {OrderedHeaderListElements,HeaderItem,OrderItemsContainer,TitleNavItems,SearchContainer,AddBUtton} from './ProductsStyled'

  class Products extends Component {
    state = {
      products: [],
      showItems: false
    };

    
    DoneButtonClicked = (id) => {
      const { products } = this.state;
    
      products.forEach((eachProduct) => {
        if (eachProduct.id === id) {
          eachProduct.status = {
            ...eachProduct.status,
            text: "Approved",
            bgColor: "#5ed152"
          };
        }
      });
    
      this.setState({ products });
    };
    
    missingProductUrgentClicked= (id) => {
      const { products } = this.state;
    
      products.forEach((eachProduct) => {
        if (eachProduct.id === id) {
          eachProduct.status = {
            ...eachProduct.status,
            text: "Missing-Urgent",
            bgColor: "#f20f0f"
          };
        }
      });
    
      this.setState({ products });
    };

    missingProductClicked= (id) => {
      const { products } = this.state;
    
      products.forEach((eachProduct) => {
        if (eachProduct.id === id) {
          eachProduct.status = {
            ...eachProduct.status,
            text: "Missing",
            bgColor: "#ed850e"
          };
        }
      });
    
      this.setState({ products });
    };
    
    
    

    renderOrderedOItems = () => {
      const { products } = this.state;

      return (
        <>
          <OrderItemsContainer>
            <TitleNavItems>
              <SearchContainer>
                <input type="search"  placeholder="Search...." className='search'/>
                <CiSearch className='searchicon'/>
                </SearchContainer>
              <AddBUtton>Add item</AddBUtton>
              <IoPrintOutline className='print-icon'/>
            </TitleNavItems>
            <OrderedHeaderListElements>
              <HeaderItem width="85px" >Product name</HeaderItem>
              <HeaderItem width="105px" >Brand</HeaderItem >
              <HeaderItem width="85px" >Price</HeaderItem>
              <HeaderItem width="75px" >Quantity</HeaderItem>
              <HeaderItem width="85px" >Total</HeaderItem>
              <HeaderItem width="145px" >Status</HeaderItem>
            </OrderedHeaderListElements>
            {products.map(eachProduct=>(
              <ProductItemDetails missingProductUrgentClicked={this.missingProductUrgentClicked} missingProductClicked={this.missingProductClicked} DoneButtonClicked={this.DoneButtonClicked} key={eachProduct.id} productDetails={eachProduct}/>
            ))}
          </OrderItemsContainer>
        </>
      );
    };

    async componentDidMount() {
      this.getProductsData()
      }
    
      getProductsData= async ()=>{
        const response = await fetch('/productsdata.json');
        const data = await response.json();
        this.setState({ products: data.products, showItems: true });
      }



    render() {
      const { showItems } = this.state;

      return showItems ? this.renderOrderedOItems() : null;
    }
  }

  export default Products;
