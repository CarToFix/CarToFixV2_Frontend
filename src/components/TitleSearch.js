import React from 'react';
import styled from 'styled-components';
import { SearchOutlined, UnorderedListOutlined, AppstoreFilled } from '@ant-design/icons';

const FirstDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
`;

const Title = styled.h1`
  font-size: 60px;
  color: #2C518D;
  font-family: Arial;
  text-transform: uppercase;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  border-radius: 30px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.3);
  input {
    width: 100%;
    font-size: 15px;
    border-radius: 30px;
    border: 0px;
    padding: 8px 150px 8px 15px;
    background-color: #ECEDED;
  }
  .search-icon {
    color: white;
    background-color: #2C518D;
    border-radius: 50%;
    padding: 8px;
    margin-left: -30px;
  }
`;

const SearchList = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #2C518D;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleSearch = ({ isTilesView, onToggleView }) => {
  return (
    <FirstDiv>
      <Title>
        Vehículos
      </Title>
      <SearchList>
        <SearchContainer>
          <input
            type="text"
            placeholder="Buscar..."
          />
          <SearchOutlined className="search-icon" />
        </SearchContainer>
        <Button onClick={onToggleView}>
          {isTilesView ? <UnorderedListOutlined /> : <AppstoreFilled />}
        </Button>
      </SearchList>
    </FirstDiv>
  );
};

export default TitleSearch;
