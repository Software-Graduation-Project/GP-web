import styled from "styled-components";
import { FaCartShopping } from "react-icons/fa6";
import Logo from "../../../assets/sweet.jpg";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/SweetContext";
import { useContext } from "react";

const NavbarContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.background || "white"};
  color: ${({ theme }) => theme.colors.text || "black"};
  transition: background-color 0.2s, color 0.2s;
  position: sticky;
  top: 60px;
  z-index: 1000;
`;

const NavbarInner = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 640px) {
    padding: 1rem;
  }
`;

const LogoContainer = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text || "inherit"};

  img {
    width: 2.5rem;
    border-radius: 50%;
  }

  @media (min-width: 640px) {
    font-size: 2rem;
  }
`;

const OrderButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 1rem;
  background: linear-gradient( to left, #000000e4, #C47B83);
  color: white;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  .icon {
    font-size: 1.25rem;
    color: white;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2));
  }
  .span{
    background: linear-gradient(to bottom, #000, #bc666c);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Navbar = () => {

  const context = useContext(ShopContext);

  if (!context) {
    console.error("Cart must be used within a ShopContextProvider");
    throw new Error("Cart must be used within a ShopContextProvider");
  }
  const {getTotal}=context;


  return (
    <NavbarContainer>
      <NavbarInner>
        {/* Logo Section */}
        <LogoContainer href="/sweettouches">
          <img src={Logo} alt="Logo" />
          Sweet Touches
        </LogoContainer>
        {/* Order Button */}

         <Link to="/cart">
          <OrderButton>
            Order
            <FaCartShopping className="icon" />
            <span>{getTotal()}</span>
          </OrderButton>
        </Link>
      </NavbarInner>
    </NavbarContainer>
  );
};

export default Navbar;
