/**
 * This component is responsible for having a search bar, filter and change from tiles or tables
 * search bar and filter is not working at the moment 
 */

import React from 'react';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import List from '../assets/listas.png';
import Cards from '../assets/tarjetas.png';

const FirstDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  padding-bottom: 10px;
  padding-left:10px;
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

const Dropdown = styled.select`
  min-width: 120px;
  margin-right: 20px;
  border-radius: 30px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.3);
  border: none;
  padding: 8px;
  font-size: 15px;
  background-color: #ECEDED;
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
  img {
    width: 30px;
    height: 30px;
  }
`;

const TitleSearch = ({ isTilesView, onToggleView }) => {
  return (
    <FirstDiv>
      <Title>
        Trabajos
      </Title>
      <SearchList>
        <SearchContainer>
          <input
            type="text"
            placeholder="Buscar..."
          />
          <SearchOutlined className="search-icon" />
        </SearchContainer>
        <Dropdown>
          <option value="">Por Estado</option>
          <option value="opcion1">Pendiente</option>
          <option value="opcion2">Finalizado</option>
        </Dropdown>
        <Dropdown>
          <option value="">Por Tipo</option>
          <option value="opcion1">A</option>
          <option value="opcion2">B</option>
          <option value="opcion3">C</option>
        </Dropdown>
        <Button onClick={onToggleView}>
          {isTilesView ? <img src={List} alt="List view" /> : <img src={Cards} alt="Cards view" />}
        </Button>
      </SearchList>
    </FirstDiv>
  );
};

export default TitleSearch;