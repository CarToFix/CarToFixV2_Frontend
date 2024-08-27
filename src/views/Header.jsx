import React from 'react';
import styled from 'styled-components';
import ajustesIcon from '../assets/Ajustes.png';


const Header = () => {

    const handleClick = (boxName) => {
        alert(`Has hecho clic en ${boxName}`);
    };

  return (
    <HeaderContainer>
      <Box1 onClick={() => handleClick("Nombre del tallero")}>Nombre del taller</Box1>
      <Box5 onClick={() => handleClick('Trabajos')}>Trabajos</Box5>
      <Box4 onClick={() => handleClick('Presupuestos')}>Presupuestos</Box4>
      <Box3 onClick={() => handleClick('Vehículos')}>Vehículos</Box3>
      <Box2 onClick={() => handleClick('Repuestos')}>Repuestos</Box2>
      <Box6 onClick={() => handleClick('Ajustes')}><img src={ajustesIcon} alt="Ajustes" /></Box6>
    </HeaderContainer>
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
    

    cursor: pointer;
    transition: transform 0.2s ease-in-out; /* Suaviza la animación */

    &:hover {
        box-shadow: inset 0 -13px 0  #ffffff;
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
    
    cursor: pointer;
    transition: transform 0.2s ease-in-out; /* Suaviza la animación */

    &:hover {
        box-shadow: inset 0 -13px 0  #ffffff;
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