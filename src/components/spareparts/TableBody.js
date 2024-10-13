import React from 'react';
import styled from 'styled-components';

const StyledTBody = styled.tbody`
  display: block;
  max-height: 50vh;
  width: calc(100% - 15px);
  margin-right: 15px; 
  padding-right: 15px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background: #BABABA;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #D9D9D9;
    border-radius: 8px;
  }
`;

const StyledTr = styled.tr` 
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid transparent;
  padding-right: 10px;
`;

const StyledTd = styled.td`
  flex: 1;
  background-color: #BABABA;
  padding: 11px;
  padding-left: 15px;
  text-align: left;
  color: black;
  font-family: "inter", sans-serif;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:first-of-type {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &:last-of-type {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
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

const StatusTd = styled(StyledTd)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px; 
`;

const ButtonTable = styled.button`
  font-family: "inter", sans-serif;
  background-color: #2C518D;
  color: white;
  border: none;
  padding: 4px 14px;
  margin-left: 10px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 20px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const BodyTable = ({ data, onButtonClick }) => {
  const bodyMappings = {
    name: 'Nombre',
    size: 'Medidas',
    quantity: 'Cantidad',
    description: 'Descripcion',
  };
  const columns = Object.keys(bodyMappings);

  return (
    <StyledTBody>
      {data.map(({ id, ...row }) => (
        <StyledTr key={id}>
          {columns.map(field => (
            field === 'name' ? (
              <StatusTd key={field}>
                <input type="checkbox" />
                {row[field]}
              </StatusTd>
            ) : (<StyledTd key={field}>{row[field]}</StyledTd>)
          ))}
          <ButtonTable onClick={() => onButtonClick(id)}>Ver</ButtonTable>
        </StyledTr>
      ))}
    </StyledTBody>
  );
};

export default BodyTable;