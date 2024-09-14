import React from "react";
import styled from "styled-components";
import { FaUserEdit } from "react-icons/fa";

// Para foto de perfil
const Photo = styled.div`
background: linear-gradient(90deg, #335FA6, #23406D);
width: 14vw;
height: 14vw;
border-radius: 100%;
border: 4px solid white;
display: flex;
justify-content: center;
align-items: center;
position: relative;

@media (max-width: 1000px) {
    width: 15vw;
    height: 15vw;
  }
`
// Diseño de la letra
const Inicial = styled.h1`
color: white;
font-size: 14vh;
margin: 0;
font-family: "inter", sans-serif;

@media (max-width: 1300px) {
  font-size: 8vh;
  }
`
const ToEdit = styled.div`
background-color: rgba(0, 0, 0, 0.2); /* Color de fondo con transparencia */
backdrop-filter: blur(11px); /* Difuminado */
width: 14vw;
height: 14vw;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
bottom: 0;
opacity: 0;
transition: opacity 0.3s;

@media (max-width: 1000px) {
    width: 15vw;
    height: 15vw;
  }
`
const PhotoWalpper = styled.div`
  position: relative;
  width: 64%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    width: 64%;
    height: 30%;
  }

  &:hover ${ToEdit} {
    opacity: 1; /* Muestra ToEdit al pasar el cursor */
  }`

// Icono para editar foto
const ImagenEditSVG = styled(FaUserEdit)`
width: 30%;
height: 30%;
cursor: pointer;
color: white;
padding-left: 10px;
`
export default function AccountInitials({name}) {
  // Para tener las iniciales
const getInitials = (name) => {
  const Words = name.split(' '); // separadas por un espacio
  const iniciales = Words.map(Words => Words[0].toUpperCase()).join(''); // la primera letra y que la convierta en mayuscula
  return iniciales;
};
const iniciales = getInitials(name);

return (
  <PhotoWalpper>
    <Photo>
      <Inicial>{iniciales}</Inicial>
    <ToEdit>
      <ImagenEditSVG/>
    </ToEdit>
    </Photo>
  </PhotoWalpper>
)
}