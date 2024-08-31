import React from 'react';
import styled from 'styled-components';
import HeaderTable from './TableHeader';
import BodyTable from './TableBody';

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

  return (
    <SecondDiv>
      <StyledTable>
        <HeaderTable />
        <BodyTable />
      </StyledTable>
    </SecondDiv>
  );
};

export default GenerarTable;