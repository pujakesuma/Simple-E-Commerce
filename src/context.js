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
    loading: true,
    detailProduct: detailProduct
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

  handleDetail = () => {
    console.log("hello from detail");
  };

  addToCart = id => {
    console.log(`hello from add to cart ${id}`);
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
              addToCart: this.addToCart
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
