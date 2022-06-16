import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
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
        <CustomMenu></CustomMenu>
      </RightMenu>
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
