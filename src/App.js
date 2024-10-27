/**
 * 
 */

import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from "styled-components";

const Divv = styled.div`
  overflow: hidden;
`
const HeaderContainer = styled.div`  //this is a placeholder for the header
  background: linear-gradient(70deg, #23406D, #335FA6);
  height: 10vh;
`;


const App = () => {
  return (
    <Divv>
      <HeaderContainer />
      <Outlet />
    </Divv>
  );
};

export default App;