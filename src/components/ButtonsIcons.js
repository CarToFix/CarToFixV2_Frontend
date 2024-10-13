/**
 * This component is responsible for dynamically render buttons 
 * They dont have any real functions yet
 */
import React from 'react';
import styled from 'styled-components';
import SelectIcon from "../assets/Seleccionar.svg";
import MoveIcon from "../assets/Mover.svg";
import DeleteIcon from "../assets/Papelera.svg";

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  padding-left: 5px;
  top: 0;
  left: 0;
`;

const Icon = styled.img`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;


const ButtonsIcons = ({ activeButton }) => {
  return (
    <IconContainer>
      {activeButton === 'toBuy' ? (
        <>
          <Icon src={SelectIcon} alt="Search" />
          <Icon src={MoveIcon} alt="Move" />
          <Icon src={DeleteIcon} alt="Delete" />
        </>
      ) : (
        <>
          <Icon src={SelectIcon} alt="Search" />
          <Icon src={DeleteIcon} alt="Delete" />
        </>
      )}
    </IconContainer>
  );
};

export default ButtonsIcons;