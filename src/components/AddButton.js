import React from 'react';
import styled from 'styled-components';
import { PlusCircleFilled } from '@ant-design/icons';

const Container = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  font-size: 60px;
  cursor: pointer;
  color: #E67E22;
`;

const AddButton = () => {
  return (
    <Container>
      <PlusCircleFilled />
    </Container>
  );
};

export default AddButton;