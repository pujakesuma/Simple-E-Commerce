//Context API
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import ReactLoading from "react-loading";
import { detailProduct, storeProducts } from "./data";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    cart: [],
    loading: true,
    detailProduct: detailProduct,
    modalOpen: false,
    modalProduct: detailProduct
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      });
      this.setProducts();
    }, 1000);
  };

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        console.log(this.state); //callback
      }
    );
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  render() {
    return (
      <>
        {this.state.loading ? (
          <span className="container">
            <ReactLoading
              type={"spinningBubbles"}
              color={"#7b3638"}
              className="container"
            />
          </span>
        ) : (
          <ProductContext.Provider
            value={{
              ...this.state,
              handleDetail: this.handleDetail,
              addToCart: this.addToCart,
              openModal: this.openModal,
              closeModal: this.closeModal
            }}
          >
            {this.props.children}
          </ProductContext.Provider>
        )}
      </>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
