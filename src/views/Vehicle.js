import React, { useState } from 'react';
import styled from 'styled-components';
import TitleSearch from '../components/TitleSearch';
import Tiles from '../components/Tiles';
import Table from '../components/Table';
import AddButton from '../components/AddButton';

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

const Vehicle = () => {
  const [isTilesView, setIsTilesView] = useState(true);
  const toggleView = () => {
    setIsTilesView(!isTilesView);
  };

  return (
    <Container>
      <Content>
        <TitleSearch isTilesView={isTilesView} onToggleView={toggleView} />
        {isTilesView ? <Tiles /> : <Table />}
        <AddButton />
      </Content>
    </Container>
  );
};

export default Vehicle;
