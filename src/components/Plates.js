import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SerchPlate from '../assets/Icons/SerchPlate.svg';
import RegistrarPlate from '../assets/Icons/RegistrarPlate.svg';
import inspeccion from '../assets/Icons/inspeccion.svg';
import { PlatesSimulados } from "./MockData";  // Asegúrate de que la ruta de importación sea correcta
import ModalNewVehicle from "./ModalNewVehicle";

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
  width: 50%;
  outline: none;
  font-size: 30px;
  border: none;
  border-bottom: 3px dashed #D9D9D9;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase; // Para que esté en mayuscula
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
  width: 75px;
  height: 57px;
`
export default function Plates() {
  const [plate, setPlate] = useState(""); // Estado para almacenar la matrícula ingresada
  const [status, setStatus] = useState(null); // Estado para controlar el resultado de la búsqueda
  const [isSearching, setIsSearching] = useState(false); // Estado para indicar si se ha hecho clic en el botón de búsqueda
  const [showModal, setShowModal] = useState(false);

  const handlePlateChange = (e) => {
    setPlate(e.target.value); // Actualiza el valor de la matrícula ingresada
  };

  const handleSearchClick = () => {
    setIsSearching(true); // Activa la búsqueda
  };

  const handleOpenAll = () => {
    setShowModal(true);
  }

  const handleCloseAll = () => {
    setShowModal(false);
  }
  const handleSave = () => {
    setStatus("inspeccion"); // Cambia el estado a "inspección"
    setShowModal(false); // Cierra el modal después de guardar
  };
  useEffect(() => {
    if (!isSearching) return; // Solo se ejecuta si el usuario ha presionado el botón de búsqueda

    if (plate === "") {
      setStatus(null); // Si el campo de matrícula está vacío, resetea el estado
      return;
    }

    // Verifica si la matrícula existe en PlatesSimulados
    const found = PlatesSimulados.some((plateObj) => plateObj.nombre === plate);
    setStatus(found ? "inspeccion" : "registrar"); // Actualiza el estado según si encontró la matrícula
    setIsSearching(false)
  }, [isSearching, plate]); // Ejecuta el useEffect solo cuando `isSearching` o `plate` cambian

  return (
    <>
    <PlateContainers>
      <Plate>
        <DivTitle>
          <TitleMatricula>MATRICULA</TitleMatricula>
        </DivTitle>
        <DivPlate>
          <VehiclePlate
            value={plate}
            onChange={handlePlateChange}
          />
        </DivPlate>
      </Plate>

      <Serchplate onClick={status === 'registrar' ? handleOpenAll : handleSearchClick}>
        <TitleSerchPlate>
          {status === null ? "BUSCAR MATRICULA" : status === "inspeccion" ? "INSPECCION VEHICULAR" : "REGISTRAR MATRICULA"}
        </TitleSerchPlate> 
        <ImageSerch 
          src={status === null ? SerchPlate : status === "inspeccion" ? inspeccion : RegistrarPlate} 
          alt={status === null ? "buscar matricula" : status === "inspeccion" ? "inspeccion vehicular" : "registrar matricula"} 
        />
      </Serchplate>
    </PlateContainers>
    {showModal && <ModalNewVehicle onClose={handleCloseAll} onSave={handleSave}/>}
  </>
  );
}
