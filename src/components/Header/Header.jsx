import React from "react";
import Logo from "../../assets/MokiliEvent.png";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../utils/Colors";

//.......HeaderStyled........
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  position: sticky;
  background-color: ${Colors.white};
  max-height: 20vh;
`;
export const LogoApp = styled.img`
  max-width: 150px;
  margin: -25px;
  margin-bottom:-50px;
  margin-left: 2vh;
  align-self:center;
  align-items:center;
`;

const LinkDiv = styled.div`
    display:flex;
    justify-content: space-around
    align-content: center;
    padding-right: 4vh;
    margin-top: -30px;
    margin-bottom: -30px;
`;

const LinkApp = styled(Link)`
  text-decoration: none;
  color: ${Colors.primary};
  padding: 1vh;
  &:hover {
    background-color: ${Colors.primary};
    color: ${Colors.white};
    border-radius: 5vh;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="m-4">
        <LogoApp src={Logo} alt="LogoMokiliEvent" />
      </div>
      <LinkDiv>
        <LinkApp to="/">Acceuil</LinkApp>
        <LinkApp to="/Contacts">Contactes</LinkApp>
        <LinkApp to="/About">A propos</LinkApp>
        <Outlet />
      </LinkDiv>
    </HeaderContainer>
  );
};

export default Header;
