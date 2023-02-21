import React from "react";
import PropTypes from "prop-types";
import {
  CardWrapper,
  CardTitle,
  CardLabel,
  CardImg,
} from "../StyleOfAllComponents/StyleOfAllComponents";
import Profile from "../../assets/devProfile.png";

const Card = ({ contactObj,name, email, picture, adress, phone }) => {
  return (
    <>
      <CardWrapper className="shadow m-3">
        <CardLabel>{name}</CardLabel>
        <CardTitle>{email}</CardTitle>
        <CardImg src={picture} alt="CardPicture" />
        <CardTitle>{adress}</CardTitle>
        <CardTitle>{phone}</CardTitle>
      </CardWrapper>
      <CardWrapper className="shadow m-3">
        <CardLabel>{contactObj.Name}</CardLabel>
        <CardTitle>{contactObj.Email}</CardTitle>
        <CardImg src={picture} alt="CardPicture" />
        <CardTitle>{contactObj.Adress}</CardTitle>
        <CardTitle>{contactObj.Phone}</CardTitle>
      </CardWrapper>
    </>
  );
};


Card.proptype = {
  contactObj: PropTypes.string.isRequired,
}; 
Card.defaultProps = {
  contactObj:``,
  picture: Profile,
};

export default Card;
