import React from 'react';
import styled from 'styled-components';
import Vehicle from './views/Vehicle';

const HeaderContainer = styled.div`
  background-color: #2C518D;
  height: 10vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
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