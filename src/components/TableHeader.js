import React from 'react';
import styled from 'styled-components';
import { tableData } from '../data/data';

const StyledThead = styled.thead`
  display: grid;
  margin-right: 9vh;
  position: sticky;
  top: 0;
  z-index: 1;
  border-bottom: 12px solid transparent;
  font-size: 20px;
`;

const StyledTr = styled.tr` 
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid transparent;
  padding-right: 10px;
`;

const StyledTh = styled.th`
  flex: 1; 
  padding: 5px;
  padding-left: 15px;
  text-align: left;
  color: #2C518D;
  border: 1px solid transparent;
  background-color: #C9C9C9;
  &:first-child {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
  &:last-child {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  position: relative;
  &:not(:first-child)::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10%;
    height: 80%;
    width: 0.5px; 
    background-color: black;
  }
`;

const HeaderTable = () => {

  const headerMappings = {
    brand: 'Marca',
    model: 'Modelo',
    plate: 'Matricula',
    services: 'Servicios',
    lastService: 'Ult. Servicio',
  };

  const columns = Object.keys(tableData[0])
    .filter((key) => key !== 'id')
    .map((key) => ({ displayName: headerMappings[key] }));

  return (
    <StyledThead>
      <StyledTr>
        {columns.map((column, index) => (
          <StyledTh key={index}>{column.displayName}</StyledTh>
        ))}
      </StyledTr>
    </StyledThead>
  );
};

export default HeaderTable;