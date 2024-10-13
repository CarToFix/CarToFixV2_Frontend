/**
 * This component is resposible of rendering the modal with a better view and more details about the sparepart
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
  width: 45vw;
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
  top: 35px;
  right: 25px;
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

const Value = styled.span`
  flex: 2 1 67%; 
  background-color: #BABABA;
  padding: 8px 15px;
  border-radius: 15px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Buttons = styled.button`
  font-family: "Inter", sans-serif;
  background-color: ${(props) => props.color || "#2C518D"};
  color: white;
  border: none;
  border-radius: 20px;
  width: 15%;
  min-width: 100px;
  padding: 8px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.3);
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`

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
          <span> Repuesto</span>
          <CloseButton onClick={onClose}>
            <CloseOutlined />
          </CloseButton>
        </ModalHeader>
        <ContentWrapper>
          <Column>
            <DetailItem label="Nombre" value={info.name} />
            <DetailItem label="Medidas" value={info.size} />
            <DetailItem label="Cantidad" value={info.quantity} />
            <DetailItem label="Descripción" value={info.description} />
            <DetailItem label="Día" value={info.date} />
          </Column>
        </ContentWrapper>
        <ButtonsWrapper>
          <Buttons color="#E67E22">Deshacer</Buttons>
          <Buttons>Editar</Buttons>
          <Buttons>Guardar</Buttons>
        </ButtonsWrapper>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
