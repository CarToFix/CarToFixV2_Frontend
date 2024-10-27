/**
 * This is the main view
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import TitleSearch from '../components/budget/TitleSearch';
import Tiles from '../components/budget/Tiles';
import Table from '../components/budget/Table';
import NewserviceButton from '../components/budget/ButtonNewService';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const Content = styled.div`
  height: 67vh;
  width: 84vw;
`;

const Budget = () => {
  const [isTilesView, setIsTilesView] = useState(true);
  const toggleView = () => {
    setIsTilesView(!isTilesView);
  };

  return (
    <Container>
      <Content>
        <TitleSearch isTilesView={isTilesView} onToggleView={toggleView} />
        {isTilesView ? <Tiles /> : <Table />}
        <NewserviceButton />
      </Content>
    </Container>
  );
};

export default Budget;
