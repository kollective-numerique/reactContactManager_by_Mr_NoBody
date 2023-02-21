import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  ModalForm,
  ModalInput,
  ModalTop,
  RegisterImage,
} from "../StyleOfAllComponents/StyleOfAllComponents";
import SaveIMG from "../../assets/register.png";

const CreateContact = ({ modal, toggle, save }) => {
  const [nameContact, setName] = useState("");
  const [emailContact, setEmail] = useState("");
  const [adressContact, setAdress] = useState("");
  const [phoneContact, setPhone] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nom: ``,
      mail: ``,
      adress: ``,
      phone: ``,
    },
  });
  console.log(errors);

  const handleChange = (e) => {
    const { name, email, adress, value } = e.target;

    if (name === "nameContact") {
      setName(value);
    } else if (email === "emailContact") {
      setEmail(value);
    } else if (adress === "adressContact") {
      setAdress(value);
    } else {
      setPhone(value);
    }
  };

  const handleSave = () => {
    let contactObj = {};
    contactObj["Name"] = nameContact;
    contactObj["Email"] = emailContact;
    contactObj["Adress"] = adressContact;
    contactObj["Phone"] = phoneContact;
    save(contactObj);
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <ModalTop>
            <RegisterImage src={SaveIMG} alt="SaveIMG" />
            <h4 className="mt-4">Créer un nouveau contact</h4>
          </ModalTop>
        </ModalHeader>
        <ModalBody>
          <ModalForm
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <ModalInput
              type="text"
              value={nameContact}
              name="nameContact"
              {...register("nom", {required:`Renseignez votre nom !`})}
              onChange={handleChange}
              placeholder="Entrez le nom au complet du contact"
            />
             <span className="text-danger">{errors.nom?.message}</span>
            <ModalInput
              type="email"
              value={emailContact}
              name="emailContact"
              {...register("mail", {required:`Renseignez votre email !`})}
              onChange={handleChange}
              placeholder="Entrez l'email du contact"
            />
            <span className="text-danger">{errors.mail?.message}</span>
            <ModalInput
              type="text"
              value={adressContact}
              name="adressContact"
              {...register("adress", {required:`Renseignez votre adresse !`})}
              onChange={handleChange}
              placeholder="Entrez l'adresse du contact"
            />
             <span className="text-danger">{errors.adress?.message}</span>
            <ModalInput
              type="phone"
              value={phoneContact}
              name="phoneContact"
              {...register("téléphone", {required:`Renseignez votre numéro de téléphone !`})}
              onChange={handleChange}
              placeholder="Entrez le numéro de téléphone du contact"
            />
             <span className="text-danger">{errors.phone?.message}</span>
          </ModalForm>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-success" onClick={handleSave}>
            Enregistrer
          </button>
          <Button className="btn btn-danger" onClick={toggle}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CreateContact;
