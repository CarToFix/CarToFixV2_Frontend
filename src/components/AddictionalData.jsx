import React from "react";
import styled from "styled-components";
import IconsDashboard from "../assets/Icons/icons_dashboard.svg"

// Contenedor principal para el SVG y los textos
const DivSvg = styled.div`
position: relative;
width: 100%;
height: 100%;
`
// Estilo para la imagen
const ImageSVG = styled.img`
position: absolute;
top: 20px;
left: 50%;    //Centra de forma horizontal
transform: translateX(-50%); //Centra de forma horizontal
width: 75%;

@media (max-width: 1100px) {
  width: 95%;
  top: 55px;
}
`
// Estilo para el texto debajo de la imagen
const TextInformation = styled.h3`
position: absolute;
bottom: 20px;
left: 50%;
transform: translateX(-50%);
width: 50%;
font-size: 20px;
margin: 0;
text-align: center;
color: #2C518D;
font-family: "Inter", sans-serif;

 @media (max-width: 1100px) {
    font-size: 2vh;
    width: 75%;
    text-align: center;
  }
`
// estilo para el número que muestra en la mitad de la imagen
const Number = styled.h3 `
position: absolute;
bottom: 33%;
left: 50%;
transform: translateX(-50%);
width: 50%;
font-size: 45px;
margin: 0;
text-align: center;
color: #2C518D;
font-family: "Inter", sans-serif;

@media (max-width: 1100px) {
  font-size: 40px;
  bottom: 30%;
}
`
export default function AddictionalData({title, level}) {
    return (
        <DivSvg>
            <ImageSVG src={IconsDashboard} alt="IconsDashboard"/> {/* Muestra el ícono SVG */}
            <Number>{level}5</Number>
        <TextInformation>{title}</TextInformation>
    </DivSvg>
    )
}