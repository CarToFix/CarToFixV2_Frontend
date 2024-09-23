import React, { useState } from 'react';
import styled from 'styled-components';
import ajustesIcon from '../assets/Ajustes.png';
import Settings from './Settings';


const Header = () => {
    const [showSettings, setShowSettings] = useState(false);

  // Función para alternar la visibilidad del modal
  const toggleSettings = () => {
    setShowSettings(!showSettings); // Cambia de true a false o viceversa
  };


  return (
    <>
        <HeaderContainer>
        <Box1 onClick={() => console.log("Nombre del tallero")}>Taller Mecanico</Box1>
        <Box5 onClick={() => console.log('Trabajos')}>Trabajos</Box5>
        <Box4 onClick={() => console.log('Presupuestos')}>Presupuestos</Box4>
        <Box3 onClick={() => console.log('Vehículos')}>Vehículos</Box3>
        <Box2 onClick={() => console.log('Repuestos')}>Repuestos</Box2>
        <Box6 onClick={toggleSettings}><img src={ajustesIcon} alt="Ajustes" /></Box6>
        </HeaderContainer>

        {showSettings && <Settings onClose={toggleSettings} />}
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: linear-gradient(70deg, #23406D, #335FA6);
    height: 10vh;
    width: 100%;
    align-items: stretch;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

`

const Box1 = styled.h1`
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

`

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
`

const Box2 = styled(BoxBase)`

`
const Box3 = styled(BoxBase)`
`
const Box4 = styled(BoxBase)`
`
const Box5 = styled(BoxBase)`

`
const Box6 = styled(BoxBase)`
    padding-right: 10px;
    img {
        width: 30px; /* Ajusta esto según el tamaño deseado */
        height: auto;
    }
`