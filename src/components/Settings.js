import React, { useState } from 'react';
import styled from "styled-components";
import XIcon from "../assets/X.svg";
import Pin from '../components/Pin';

const Settings = ({ onClose }) => {
  const [showPin, setShowPin] = useState(false);

  const togglePin = () => {
    setShowPin(!showPin);
  };

  const closePin = () => {
    setShowPin(false);
  };

  return (
    <>
      <SettingsContainer>
        <Box1>
          <CloseButton onClick={onClose}>
            <img src={XIcon} alt="Cerrar" />
          </CloseButton>
        </Box1>
        <Box2>
          <h3
            style={{ cursor: "pointer" }}
            onClick={togglePin}
          >
            Configuración del taller
          </h3>
          <h3
            style={{ cursor: "pointer" }}
            onClick={togglePin}
          >
            Gestión de usuarios
          </h3>
          <h3
            style={{ cursor: "pointer" }}
            onClick={() => console.log("Contáctanos")}
          >
            Contáctanos
          </h3>
        </Box2>
        <Box3>
          <h2 style={{ cursor: "pointer" }} onClick={() => console.log("Cerrar Sesión")}>Cerrar Sesión</h2>
        </Box3>
      </SettingsContainer>
      {showPin && <Pin onClose={closePin} />}
    </>
  );
};

export default Settings;

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column; /* Alinea los elementos en una columna (verticalmente) */
  justify-content: center; /* Centra verticalmente los elementos dentro del contenedor */
  align-items: center; /* Centra horizontalmente los elementos dentro del contenedor */
  height: 100%;
  width: 20vw;
  min-width: 20vw;
  background-color: #ffffff;
  border: 3px solid #2c518d;
  border-right: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  position: fixed; /* Posiciona el modal arriba del resto de elementos */
  z-index: 1000; /* Mantiene el modal sobre cualquier elemento */
  right: 0;
`;

const Box1 = styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
  width: 100%;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  padding-left: 40px;
  cursor: pointer;
  img {
    width: 20px; /* Ajusta el tamaño como necesites */
    height: 20px;
  }
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column; /* Alinea los elementos en columna */
  justify-content: center; /* Centra verticalmente los elementos */
  align-items: center; /* Centra horizontalmente los elementos */
  height: 80vh; /* Ocupa el espacio restante debajo de la barra */
  width: 100%; /* Ocupa todo el ancho disponible */
  background-color: #ffffff;
  color: #2c518d;
`;

const Box3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100%;
  border-bottom-left-radius: 15px;
  background: linear-gradient(70deg, #23406d, #335fa6);
  color: white;
  padding-bottom: 0px;
`;
