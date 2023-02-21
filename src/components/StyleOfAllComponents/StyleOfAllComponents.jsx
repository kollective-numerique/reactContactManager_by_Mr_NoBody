import styled from "styled-components";
import { Colors } from "../../utils/Colors";

export const ModalFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ModalTop = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 2vh;
`;
export const RegisterImage = styled.img`
  max-width: 80px;
`;
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 5vh;
  font-family: roboto;
`;
export const ModalInput = styled.input`
  border: none;
  border-bottom: 0.5px gray solid;
  padding: 1vh;
  width: 50vh;
  outline: none;
  background: transparent;
  &::placeholder {
    font-family: roboto;
    font-size: 15px;
    font-weight: lighter;
  }
`;
export const ModalFooterButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 82px;
  box-sizing: border-box;
  border: none;
  border-radius: 1px;
  cursor: pointer;
  font-weight: 500px;
  position: relative;
  outline: none;
  gap: 8px;
  user-select: none;
  height: 40px;
  padding: 0 16px;
  text-decoration: none;
`;
export const CloseModalBtn = styled.button`
  padding: 1vh;
  background-color: ${Colors.danger};
  color: ${Colors.white};
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
`;
export const SaveModalBtn = styled.button`
  padding: 1vh;
  background-color: ${Colors.primary};
  color: ${Colors.white};
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
`;
export const SaveModal = styled.button`
  padding: 2vh;
  width: 220px;
  background-color: ${Colors.primary};
  color: ${Colors.white};
  border-radius: 5rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;
export const CardWrapper = styled.div`
  font-family: lato;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: ${Colors.white};
  width: 350px;
  transition: 200ms;
  cursor:pointer;
  &:hover{
    background-color:whitesmoke;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content:center;
  justify-content: center;
  font-family: Roboto;
`;
export const CardLabel = styled.span`
  color: ${Colors.primary};
  font-size: 25px;
  padding: 15px;
  font-family: roboto;
  font-weight: 400;
`;
export const CardImg = styled.img`
  max-width: 80px;
  border-radius: 50%;
`;
export const CardTitle = styled.span`
  color: black;
  font-size: 18px;
  font-weight: normal;
  align-self: center;
  font-family: roboto;
  font-weight: lighter;
`;
export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
