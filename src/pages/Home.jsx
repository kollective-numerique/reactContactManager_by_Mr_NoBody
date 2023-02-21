import React from "react";
import Logo from "../assets/MokiliEvent.png";
import styled from "styled-components";
import { Colors } from "../utils/Colors";
import { Link } from "react-router-dom";

//...........HomeStyled............
export const TopDivHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.white};
  width: 100%;
  height: 60vh;
`;
const LogoHome = styled.img`
  max-width: 350px;
  margin-bottom: -100px;
`;
export const TitleHome = styled.h1`
  font-size: 60px;
  font-weight: lighter;
  margin-bottom: -50px;
`;
export const BtnHome = styled.button`
    background-color:${Colors.primary};
    padding:2vh;
    width:25vh;
    color: ${Colors.white};
    font-weight:lighter;
    border-radius: 5vh;
    border:none;
`
export const LinkHome = styled(Link)`
    text-decoration:none;
    color:${Colors.white};
`
const Home = () => {
  return (
    <>
      <TopDivHome className="text-center p-5">
        <TitleHome>Bienvenue chez</TitleHome>
        <LogoHome src={Logo} />
        <BtnHome className="shadow">
          <LinkHome to="/Contacts">Découvrir</LinkHome>
        </BtnHome>
      </TopDivHome>
    </>
  );
};

export default Home;
