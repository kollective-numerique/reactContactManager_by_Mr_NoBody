import React from "react";
import Logo from "../../assets/MokiliEvent.png";
import { LogoApp } from "../Header/Header";
import styled from "styled-components";
import { Colors } from "../../utils/Colors";

const FooterContainer = styled.div`
  bottom: 0;
  position: sticky;
  margin-top: 100%;
  padding-top: 5vh;
  padding-bottom: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.backgroundLight};
`;

const Footer = () => {
  return (
    <FooterContainer className="text-center">
      <LogoApp src={Logo} />
      <span className="text-center">&copy; Copyright</span>
      <span className="text-center">Kollectif Numérique Edition_1_2022</span>
    </FooterContainer>
  );
};

export default Footer;
