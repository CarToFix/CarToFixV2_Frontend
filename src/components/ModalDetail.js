/**
 * This component is resposible of rendering the modal with a better view and more details about the work
 */
import React from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #D9D9D9;
  width: 65vw;
  height: 48vh;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 35px;
  right: 25px;
  background: none;
  border: none;
  color: #2C518D;
  cursor: pointer;
  font-size: 24px;
`;

const ModalHeader = styled.h1`
  text-align: left;
  padding-left: 20px;
  color: #2C518D;
  margin: 5px 0 20px 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Column = styled.div`
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
`;

const Label = styled.span`
  flex: 1;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Value = styled.span`
  flex: 1;
  background-color: #BABABA;
  padding: 8px 15px;
  border-radius: 15px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const InspectionField = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
`;

const InspectionLabel = styled.span`
  font-size: 20px;
  margin-bottom: 8px;
  display: block;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
`;

const InspectionValue = styled.div`
  background-color: #BABABA;
  padding: 15px;
  border-radius: 15px;
  text-align: left;
  height: 160px; 
  white-space: pre-wrap; 
  overflow-y: auto; 
`;

const SaveButton = styled.button`
  font-family: "Inter", sans-serif;
  background-color: #2C518D;
  color: white;
  border: none;
  border-radius: 20px;
  width: 15%;
  min-width: 100px;
  padding: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-left: auto;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.3);
  display: block;
`;

const DetailItem = ({ label, value }) => (
  <Field>
    <Label>{label}:</Label>
    <Value>{value}</Value>
  </Field>
);

const Modal = ({ onClose, info }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <span>Datos del Vehículo</span>
          <CloseButton onClick={onClose}>
            <CloseOutlined />
          </CloseButton>
        </ModalHeader>
        <ContentWrapper>
          <Column>
            <DetailItem label="Matricula" value={info.plate} />
            <DetailItem label="Tipo de Vehículo" value={info.typeVehicle} />
            <DetailItem label="Marca" value={info.brand} />
            <DetailItem label="Modelo" value={info.model} />
            <DetailItem label="Color" value={info.color} />
            <DetailItem label="Kilometraje" value={info.kilometraje} />
            <DetailItem label="Propietario" value={info.owner} />
          </Column>
          <Column>
            <DetailItem label="Mail de Contacto" value={info.mail} />
            <DetailItem label="Número de Contacto" value={info.number} />
            <InspectionField>
              <InspectionLabel>Inspección Vehicular:</InspectionLabel>
              <InspectionValue>{info.inspeccion}</InspectionValue>
            </InspectionField>
          </Column>
        </ContentWrapper>
        <SaveButton>Guardar</SaveButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
