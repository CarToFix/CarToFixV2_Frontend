/**
 * This view is used when you want to get more detail about an specific car
 */

import React from 'react';
import styled from 'styled-components';
import Details from '../components/budgetDetails/Details';
import DetailsBar from '../components/budgetDetails/DetailsBar';

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

const BudgetDetail = () => {

  return (
    <Container>
      <Content>
        <DetailsBar />
        <Details />
      </Content>
    </Container>
  );
};

export default BudgetDetail;
