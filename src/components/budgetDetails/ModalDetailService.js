/**
 * This component render the modal with more and better information than tables and tiles
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
  width: 30vw;
  height: 40vh;
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
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: #2C518D;
  cursor: pointer;
  font-size: 24px;
`;

const ModalHeader = styled.h1`
  text-align: center;
  padding-left: 20px;
  font-size: 40px;
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
  flex: 1 1 33%; 
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


const LongValue = styled.span`
  flex: 2 1 67%; 
  background-color: #BABABA;
  padding: 8px 15px;
  border-radius: 15px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

const DetailItem = ({ label, value, isLong }) => (
  <Field>
    <Label>{label}:</Label>
    <LongValue isLong={isLong}>{value}</LongValue>
  </Field>
);

const Modal2 = ({ onClose, info }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <CloseButton onClick={onClose}>
            <CloseOutlined />
          </CloseButton>
        </ModalHeader>
        <ContentWrapper>
          <Column>
            <DetailItem label="Vehiculo" value={`${info.brand} - ${info.model}`} />
            <DetailItem label="Matricula" value={info.plate} />
            <DetailItem label="Empleado" value={info.assigned} />
            <DetailItem label="Repuesto" value={info.sparepart} />
            <DetailItem label="Descripcion" value={info.detail} isLong={true} />
            <DetailItem label="Precio" value={info.price} />
            <DetailItem label="Estado" value={info.status} />
          </Column>
        </ContentWrapper>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal2;
