import React, { useState } from 'react';
import styled from 'styled-components';
import ajustesIcon from '../assets/Ajustes.png';
import Settings from '../components/Settings';


const Header = () => {
  const [showSettings, setShowSettings] = useState(false);
  // Función para alternar la visibilidad del modal
  const toggleSettings = () => {
    setShowSettings(!showSettings); // Cambia de true a false o viceversa
  };

  return (
    <>
      <HeaderContainer>
        <BoxMain onClick={() => console.log("Nombre del tallero")}>Taller Mecanico</BoxMain>
        <BoxBase onClick={() => console.log('Trabajos')}>Trabajos</BoxBase>
        <BoxBase onClick={() => console.log('Presupuestos')}>Presupuestos</BoxBase>
        <BoxBase onClick={() => console.log('Vehículos')}>Vehículos</BoxBase>
        <BoxBase onClick={() => console.log('Repuestos')}>Repuestos</BoxBase>
        <BoxSetting onClick={toggleSettings}><img src={ajustesIcon} alt="Ajustes" /></BoxSetting>
      </HeaderContainer>
      {showSettings && <Settings onClose={toggleSettings} />}
    </>
  );
};
export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: linear-gradient(70deg, #23406d, #335fa6);
  height: 10vh;
  width: 100%;
  align-items: stretch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BoxMain = styled.h1`
  width: 50%;
  color: #ffffff;
  display: flex;
  justify-content: flex-start;
  padding-left: 8vw;
  box-sizing: border-box; /* El padding no afecte el ancho total, se mantiene la proporción 50% */
  align-items: center;
  height: 100%;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: transform 0.2s ease-in-out; /* Suaviza la animación */
  &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;

const BoxBase = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 10%;
  margin: 0;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 12px 0 12px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out; /* Suaviza la animación */
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 5px;
  }
`;

const BoxSetting = styled(BoxBase)`
  padding-right: 10px;
  img {
    width: 30px; /* Ajusta esto según el tamaño deseado */
    height: auto;
  }
`;