import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderTable from './TableHeader';
import BodyTable from './TableBody';
import Modal from './ModalDetail';
import { vehicleData } from '../data/data';

const SecondDiv = styled.div`
  height: 90%;
  overflow-y: hidden;
  padding: 20px;
  box-sizing: border-box; 
  background-color: #D9D9D9;
  border-radius: 30px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.3);
`;

const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-spacing: 1px 5px;
`;

const GenerarTable = () => {
  const [selectedTableId, setSelectedTileId] = useState(null);
  const openModal = (id) => {
    setSelectedTileId(id);
  };
  const closeModal = () => {
    setSelectedTileId(null);
  };
  const table = vehicleData.find(table => table.id === selectedTableId);
  console.log(table)
  return (
    <SecondDiv>
      <StyledTable>
        <HeaderTable />
        <BodyTable onButtonClick={openModal} />
      </StyledTable>
      {selectedTableId && (
        <Modal onClose={closeModal} info={table} />
      )}
    </SecondDiv>
  );
};

export default GenerarTable;