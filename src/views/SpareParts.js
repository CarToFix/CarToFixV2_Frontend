/**
 * This is the main view
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import TitleSearch from '../components/TitleSearch';
import Table from '../components/Table';
import NewserviceButton from '../components/ButtonNewService';

const Container = styled.div` // main container
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const Content = styled.div` // place where the content will be displayed
  height: 67vh;
  width: 84vw;
`;

const SpareParts = () => {
  const [activeButton, setActiveButton] = useState('toBuy');
  const handleButtonClick = (button) => {
    setActiveButton(button);
  }; //this code is what make possible changing the buttons dynamically

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
