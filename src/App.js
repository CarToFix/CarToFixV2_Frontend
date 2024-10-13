import React from 'react';
import styled from 'styled-components';
import Work from './views/Work';

const HeaderContainer = styled.div` //this is a placeholder for the header
  background: linear-gradient(70deg, #23406D, #335FA6);
  height: 10vh;
`;

const Divv = styled.div`
  overflow: hidden;
`

function App() {
  return (
    <Divv>
      <HeaderContainer />
      <Work />
    </Divv>
  );
}

export default App;