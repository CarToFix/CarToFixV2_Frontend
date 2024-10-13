import React, { useState } from 'react';
import styled from 'styled-components';
import TitleSearch from '../components/spareparts/TitleSearch';
import Table from '../components/spareparts/Table';
import NewserviceButton from '../components/spareparts/ButtonNewService';

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

const SpareParts = () => {
  const [activeButton, setActiveButton] = useState('toBuy');
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <Container>
      <Content>
        <TitleSearch activeButton={activeButton} onButtonClick={handleButtonClick} />
        <Table activeButton={activeButton} />
        <NewserviceButton />
      </Content>
    </Container>
  );
};

export default SpareParts;
