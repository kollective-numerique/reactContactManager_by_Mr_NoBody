import React, { useState, useEffect } from "react";
import ContactImage from "../assets/profile.png";
import { BtnHome } from "./Home";
import styled from "styled-components";
import CreateContact from "../components/Modal/CreateContact";
import { Loader } from "../utils/Customers";
import {
  LoaderWrapper,
  CardContainer,
} from "../components/StyleOfAllComponents/StyleOfAllComponents";
import Card from "../components/Card/Card";

//.........ContactStyled...............
const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TopDivContact = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 10vh;
  width: 100%;
`;
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IconContact = styled.img`
  max-width: 600px;
`;
const TitleContact = styled.h1`
  font-size: 60px;
  font-weight: lighter;
`;

const Contact = () => {
  const [modal, setModal] = useState(false);
  const [isDataLoading, setDataLoading] = useState(false);
  const [profilContact, setProfilContact] = useState([]);

  const toggle = () => {
    setTimeout(() => {
      setModal(!modal);
    }, 300);
  };

  useEffect(() => {
    const add = localStorage.getItem("profilContact");
    if (add) {
      const obj = JSON.parse(add);
      setProfilContact(obj);
    }

    //.............Récupération des données de l'API...............

    async function fecthProfils() {
      try {
        const Response = await fetch(
          `http://jsonplaceholder.typicode.com/users`
        );
        const profilContact = await Response.json();
        console.log(profilContact);
        setProfilContact(profilContact);
        setDataLoading(true);
        return true;
      } catch (error) {
        console.log(error);
      }
    }
    fecthProfils();
  }, []);

  //............Fonction de sauvegarde des données dans le DOM.............
  const saveContact = (contactObj) => {
    const tempList = profilContact;
    tempList.push(contactObj);
    localStorage.setItem("profilContact", JSON.stringify(tempList));
    setModal(false);
    setProfilContact(tempList);
  };

  return (
    <>
      <ContactContainer>
        <TopDivContact>
          <IconContact src={ContactImage} />
          <RightDiv>
            <TitleContact>Nos Contactes</TitleContact>
            <BtnHome className="shadow" onClick={() => setModal(true)}>
              Ajouter un contact
            </BtnHome>
          </RightDiv>
        </TopDivContact>

        {/* ....Import of Card .............. */}

        {!isDataLoading ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : (
          <CardContainer>
            {profilContact.map((obj, index) => {
              return (
                <>
                  <Card
                    key={`${obj}-${index}`}
                    name={obj.name}
                    email={obj.email}
                    picture={obj.picture}
                    adress={obj.adress}
                    phone={obj.phone}
                  />
                  <Card contactObj={obj} index={index} />
                </>
              );
            })}
          </CardContainer>
        )}
        <CreateContact modal={modal} toggle={toggle} save={saveContact} />
      </ContactContainer>
    </>
  );
};

export default Contact;
