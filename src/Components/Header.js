import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a>

        <a href="#">Model 3</a>
      </Menu>
      <RightMenu>
        <a href="#"> Shop </a>
        <a href="#"> Tesla Account </a>
        <CustomMenu />
      </RightMenu>
      <BurgerNav>
        <CloseWrapper>
          <CustomClose />
        </CloseWrapper>

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  background-color: #f9f9f9;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex:1;
  @media (max-width: 768px) {
    display: none;
  }

  a{
    font-weight: 600;
    text-transform: UpperCase;
    padding 0 10px;
    flex-wrap : no wrap;

  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: UpperCase;
    margin-right: 20px;
    flex-wrap: no wrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;

const CustomClose = styled(CancelIcon)``;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
