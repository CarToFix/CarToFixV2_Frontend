import React from 'react';
import styled from 'styled-components';
import { tileData } from '../data/data';

const SecondDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 50px 10px;
  width: 100%;
  height: 90%;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box; 
  &::-webkit-scrollbar {
    width: 15px;
    height: 15px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #D9D9D9;
    border-radius: 8px;
  }
`;

const Tile = styled.div`
  background-color: #D9D9D9;
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 290px;
  height: 310px;
  padding: 20px;
  font-family: Arial;
  color: #2F2E2E;
  box-sizing: border-box;
`;

const TileContent = styled.div`
  font-size: 20px;
  padding: 0;
  display: block;
  overflow: hidden;
  white-space: nowrap;
`;

const TileHeader = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin: 0;
  color: #2C518D;
  text-align: center;
  text-transform: uppercase;
`;


const TileTextContent = styled.span`
  font-weight: bold;
`;

const TileButtonContainer = styled.div`
  display: flex;
  justify-content: center; 
  
  button {
    background-color: #2C518D;
    color: white;
    border: none;
    border-radius: 15px;
    width: 50%;
    padding: 8px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
  }
`;


const Tiles = () => {
  return (
    <SecondDiv>
      {tileData.map(({ id, brand, model, plate, services, lastService }) => (
        <Tile key={id}>
          <TileHeader>{brand}</TileHeader>
          <TileContent>
            <p>Marca: <TileTextContent>{model}</TileTextContent></p>
            <p>Matricula: <TileTextContent>{plate}</TileTextContent></p>
            <p>Servicios: <TileTextContent>{services}</TileTextContent></p>
            <p>Ult. Service: <TileTextContent>{lastService}</TileTextContent></p>
          </TileContent>
          <TileButtonContainer>
            <button>Ver</button>
          </TileButtonContainer>
        </Tile>
      ))}
    </SecondDiv>
  );
};

export default Tiles;
