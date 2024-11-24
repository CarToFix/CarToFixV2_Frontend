import React from 'react';
import styled from "styled-components";
import XIcon from "../assets/X.svg";

const Pin = ({ onClose}) => {
    return(
        <BlackContainer>
            <Box1>
                <CloseButton onClick={onClose}>
                    <img src={XIcon} alt="Cerrar" />
                </CloseButton>
            </Box1>
            <UserInfoContainer>
                <UserProfileIcon><p>CJ</p></UserProfileIcon>
                <UserName>Carl Johnson</UserName>
                <PinImput type="password" placeholder="Ingrese PIN" />
            </UserInfoContainer>
        </BlackContainer>
    );

};
export default Pin;

const BlackContainer = styled.div`
    display: flex;
    flex-direction: column; /* Los elementos estarán en columna */
    align-items: center; /* Para centrar horizontalmente */
    

    height: 100%;
    width: 100vw;
    
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    position: fixed;
    z-index: 1001;
`;

const Box1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end; /* Para alinear el botón a la derecha */
    height: 10vh;
    width: 100vw;
    /* background-color: pink; */
    position: fixed;
    z-index: 1002;
    
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  margin-right: 30px; /* Margen de 30px al borde derecho */
  cursor: pointer;
  img {
    width: 20px; /* Ajusta el tamaño como necesites */
    height: 20px;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 300px;
  gap: 10px;
`;

const UserProfileIcon = styled.div`
    background-image: linear-gradient(to right, #335FA6, #23406D);
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 3px solid white;
    display: flex;
    margin: 0vw;
    font-weight: bold;
    font-size: 4rem; /* Aumenta el tamaño del texto */
    color: white;
    justify-content: center; /* Centra verticalmente */
    align-items: center; /* Centra horizontalmente */
    text-align: center; /* Asegura que el texto dentro esté centrado */
`;

const UserName = styled.h1`
    color: white;
    font-weight: bold;
    font-size: 2rem;
`;

const PinImput = styled.input`
    background-color: #BABABA;
    width: 300px;
    padding: 5px;
    border: 2px solid #BABABA;
    border-radius: 10px;
    font-size: 16px;
    text-align: center;
    color: white;
    outline: none;

    /* Cambiar el color del placeholder del input no funciona, se aplico en el CSS Global */
    ::placeholder {
        color: #ffffff;
    }
`;