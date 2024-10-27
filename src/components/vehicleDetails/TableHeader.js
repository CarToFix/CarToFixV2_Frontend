/**
 * This component is the header of the table 
 */

import React from 'react';
import styled from 'styled-components';

const StyledThead = styled.thead`
  display: grid;
  margin-right: 9vh;
  position: sticky;
  top: 0;
  z-index: 1;
  border-bottom: 12px solid transparent;
  font-size: 25px;
`;

const StyledTr = styled.tr` 
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid transparent;
`;

const StyledTh = styled.th`
  flex: ${(props) => props.flex}; 
  padding: 7px 0 7px 0;
  text-align: center;
  color: #2C518D;
  border: 1px solid transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #BABABA;
  &:first-child {
    border-top-left-radius: 13px;
    border-bottom-left-radius: 13px;
  }
  &:last-child {
    border-top-right-radius: 13px;
    border-bottom-right-radius: 13px;
  }
  position: relative;
  &:not(:first-child)::before {
    content: '';
    margin-left: 8px;
    position: absolute;
    left: 0;
    top: 10%;
    height: 80%;
    width: 0.5px; 
    background-color: black;
  }
`;

const HeaderTable = () => {
  const mainColumns = [
    { displayName: 'Ingreso', flex: 1 },
    { displayName: 'Detalle', flex: 2 },
  ];

  return (
    <StyledThead>
      <StyledTr>
        {mainColumns.map((column, index) => (
          <StyledTh key={index} flex={column.flex}>
            {column.displayName}
          </StyledTh>
        ))}
      </StyledTr>
    </StyledThead>
  );
};

export default HeaderTable;