import React from "react";
import styled from "styled-components";
import SerchPlate from '../assets/Icons/SerchPlate.svg';

const PlateContainers = styled.div`
height: 18%;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const Plate = styled.div`
border: 1px solid #2C518D;
border-radius: 8px;
width: 49%;
`
const DivTitle = styled.div`
display: flex;
background: #2C518D;
height: 40%;
justify-content: center;
align-items: center;
border-top-right-radius: 8px;
border-top-left-radius: 8px;
`
const TitleMatricula = styled.h4`
font-family: "inter", sans-serif;
color: #fff;
font-size: 25px;
font-weight: 100;
`
const DivPlate = styled.div`
height: 60%;
display: flex;
justify-content: space-around;
align-items: center;
`
const VehiclePlate = styled.input`
height: 60%;
width: 45%;
outline: none;
font-size: 20px;
border: none;
border-bottom: 3px dashed #D9D9D9;
text-align: center;
`
const Serchplate = styled.div`
border: 1px solid #2C518D;
background: #D9D9D9;
border-radius: 10px;
width: 49%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
cursor: pointer;
}
`
const TitleSerchPlate = styled.h4`
font-family: "inter", sans-serif;
font-size: 15px;
font-weight: bold;
color: #2C518D;
width: 50%;
align-self: center;
text-align: center;
margin-top: 14px;
margin-bottom: 14px;
`
const ImageSerch = styled.img`
widht: 10px;
height: 57px;
margin-top: 14px;
`
export default function Plates() {
  return (
    <PlateContainers>
      <Plate>
        <DivTitle>
          <TitleMatricula>MATRICULA</TitleMatricula>
        </DivTitle>
        <DivPlate>
          <VehiclePlate></VehiclePlate>
        </DivPlate>
      </Plate>
      <Serchplate>
        <TitleSerchPlate>BUSCAR MATRICULA</TitleSerchPlate>
        <ImageSerch src={SerchPlate} alt="Buscar Matricula"></ImageSerch>
      </Serchplate>
    </PlateContainers>
  )
}