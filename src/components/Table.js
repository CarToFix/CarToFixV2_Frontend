/**
 * This component is the table that is render on the view 
 * Also render the modal with the corresponding id
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderTable from './TableHeader';
import BodyTable from './TableBody';
import Modal from './ModalDetail';
import { spareParts, sparePartsStock } from '../data/data';
import ButtonsIcons from './ButtonsIcons';

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

const GenerarTable = ({ activeButton }) => {
  const [selectedTableId, setSelectedTileId] = useState(null);
  const openModal = (id) => {
    setSelectedTileId(id);
  };
  const closeModal = () => {
    setSelectedTileId(null);
  };
  const tableData = activeButton === 'toBuy' ? spareParts : sparePartsStock;
  return (
    <SecondDiv>
      <StyledTable>
        <ButtonsIcons activeButton={activeButton} />
        <HeaderTable />
        <BodyTable data={tableData} onButtonClick={openModal} />
      </StyledTable>
      {selectedTableId && (
        <Modal onClose={closeModal} info={tableData.find(table => table.id === selectedTableId)} />
      )}
    </SecondDiv>
  );
};

export default GenerarTable;