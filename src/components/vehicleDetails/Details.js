/**
 * This component is responsible of displaying the works that a car had on the past
 */

import React, { useState } from 'react'
import styled from 'styled-components';
import HeaderTable from './TableHeader';
import BodyTable from './TableBody';
import Modal2 from './ModalDetailService';

const SecondDiv = styled.div`
  height: 90%;
  overflow-y: hidden;
  padding: 20px;
  box-sizing: border-box; 
  background-color: #D9D9D9;
  border-radius: 15px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.3);
`;

const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-spacing: 1px 5px;
`;

export default function Details() {
  const [selectedWork, setSelectedWork] = useState(null);
  const openModal = (work) => {
    setSelectedWork(work);
  };
  const closeModal = () => {
    setSelectedWork(null);
  };
  return (
    <SecondDiv>
      <StyledTable>
        <HeaderTable />
        <BodyTable onButtonClick={openModal} />
      </StyledTable>
      {selectedWork && (
        <Modal2 onClose={closeModal} info={selectedWork} />
      )}
    </SecondDiv>
  )
}
