import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${props =>
    props.cart ? "var(--mainPlus)" : "var(--lightBlue)"};
  color: ${props => (props.cart ? "var(--mainPlus)" : "var(--lightBlue)")};
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0.5rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props =>
      props.cart ? "var(--mainPlus)" : "var(--lightBlue)"};
    color: ${props => (props.cart ? "var(--mainDark)" : "var(--mainPlus)")};
  }
  &:focus {
    outline: none;
  }
`;