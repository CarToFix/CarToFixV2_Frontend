/**
 * This component is display the car basic information 
 * and can open a modal to show all the car information
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { vehicleDataWithDetails } from '../../data/data';
import Edit from '../../assets/Editar.svg'
import Modal from './ModalDetailVehicle'

const FirstDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  padding-bottom: 10px;
`;

const Plate = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
`;

const Top = styled.div`
  flex: 2;
  background-color: #2C518D;
  border-top-left-radius: 10px;
  border: 1px solid #2C518D;
  border-right: none; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  color: white;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Bottom = styled.div`
  flex: 3;
  background-color: white; 
  border-bottom-left-radius: 10px;
  border: 1px solid #2C518D;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: bold;
  font-size: 25px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Other = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #D9D9D9;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Text = styled.div`
  font-size: 17px;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #2C518D;
  margin-left: auto;
  padding: 0 0 0 0;
  display: flex;
  img {
    width: 55px;
    height: 55px;
  }
`;

const DetailsBar = () => {
  const { vehicleId } = useParams();
  const vehicle = vehicleDataWithDetails.find((v) => v.id === vehicleId);

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <FirstDiv>
        <Plate>
          <Top>
            <t>{vehicle.typeVehicle}</t>
          </Top>
          <Bottom>
            <t>{vehicle.plate}</t>
          </Bottom>
        </Plate>
        <Other>
          <TextContainer>
            <Text>Marca: <b>{vehicle.brand}</b></Text>
            <Text>Modelo: <b>{vehicle.model}</b></Text>
          </TextContainer>
          <TextContainer>
            <Text>Color: <b>{vehicle.color}</b></Text>
            <Text>Kmj: <b>{vehicle.kilometraje} kms</b></Text>
          </TextContainer>
          <Button onClick={handleOpenModal}>
            <img src={Edit} alt="Editar" />
          </Button>
        </Other>
      </FirstDiv>
      {showModal && <Modal onClose={handleCloseModal} info={vehicle} />}
    </>
  );
};

export default DetailsBar;