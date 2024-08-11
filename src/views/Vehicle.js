import React from 'react';
import styled from 'styled-components';
import Tiles from '../components/Tiles';
import TitleSearch from '../components/TitleSearch';
import AddButton from '../components/AddButton'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  overflow-y: hidden;
  /// i dont know how to remove the scroll bar
`;

const Content = styled.div`
  height: 67vh;
  width: 84vw;
`;


const Vehicle = () => {
  return (
    <Container>
      <Content>
        <TitleSearch />
        <Tiles />
        <AddButton />
      </Content>
    </Container>
  );
};

export default Vehicle;
