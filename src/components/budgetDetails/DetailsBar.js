/**
 * This component is display the car basic information 
 */

import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { budgetDataWithDetails } from '../../data/data';

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

const DetailsBar = () => {
  const { budgetId } = useParams();
  const budget = budgetDataWithDetails.find((v) => v.id === budgetId);
  return (
    <>
      <FirstDiv>
        <Plate>
          <Top>
            <t>{budget.typeVehicle}</t>
          </Top>
          <Bottom>
            <t>{budget.plate}</t>
          </Bottom>
        </Plate>
        <Other>
          <TextContainer>
            <Text>Marca: <b>{budget.brand}</b></Text>
            <Text>Modelo: <b>{budget.model}</b></Text>
          </TextContainer>
          <TextContainer>
            <Text>Color: <b>{budget.color}</b></Text>
            <Text>Kmj: <b>{budget.kilometraje} kms</b></Text>
          </TextContainer>
        </Other>
      </FirstDiv>
    </>
  );
};

export default DetailsBar;