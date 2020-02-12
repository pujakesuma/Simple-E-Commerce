import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { ButtonContainer } from "./Button.jsx";
import styled from "styled-components";

export class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/*https://www.iconfinder.com/icons/4177575/sale_shop_store_icon 
        Creative Commons ; https://www.iconfinder.com/joalfa*/}
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        {/* put content in this section */}
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default Navbar;
