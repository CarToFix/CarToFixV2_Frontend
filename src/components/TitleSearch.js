import React from 'react';
import styled from 'styled-components';

const FirstDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  padding-bottom: 10px;
  padding-left:10px;
`;

const Title = styled.h1`
  font-size: 60px;
  color: #2C518D;
  font-family: Arial;
  text-transform: uppercase;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  margin-left: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: ${({ isActive }) => (isActive ? '#2C518D' : 'black')};
  background-color: #D9D9D9;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.3);
  min-width: 200px;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')}; // Change font weight based on active state
`;

const TitleSearch = ({ activeButton, onButtonClick }) => {
  return (
    <FirstDiv>
      <Title> Repuestos </Title>
      <ButtonContainer>
        <Button
          isActive={activeButton === 'toBuy'}
          onClick={() => onButtonClick('toBuy')}>
          Piezas a Comprar </Button>
        <Button
          isActive={activeButton === 'inStock'}
          onClick={() => onButtonClick('inStock')}>
          Piezas en Stock </Button>
      </ButtonContainer>
    </FirstDiv>
  );
};

export default TitleSearch;