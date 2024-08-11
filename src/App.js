import React from 'react';
import styled from 'styled-components';
import Vehicle from './views/Vehicle';

const HeaderContainer = styled.div`
  background: linear-gradient(70deg, #23406D, #335FA6);
  height: 10vh;
`;

function App() {
  return (
    <div>
      <HeaderContainer />
      <Vehicle />
    </div>
  );
}

export default App;