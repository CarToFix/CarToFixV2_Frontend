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
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for the tile */
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

const TileContent = styled.ul`
  font-size: 20px;
  padding: 0;
  list-style-type: disc;
  list-style-position: inside;
  color: #2F2E2E;
  margin: 0;
`;

const TileContentItem = styled.li`
  margin-bottom: 15px;
  font-weight: normal;
`;

const TileHeader = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin: 0;
  color: #2C518D;
  text-align: center;
  text-transform: uppercase;
`;

const TileTextBold = styled.span`
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
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3); /* Shadow for the button */
  }
`;

const Tiles = () => {
  return (
    <SecondDiv>
      {tileData.map(({ id, brand, model, plate, services, lastService }) => (
        <Tile key={id}>
          <TileHeader>{brand}</TileHeader>
          <TileContent>
            <TileContentItem> Marca: <TileTextBold>{model}</TileTextBold></TileContentItem>
            <TileContentItem> Matricula: <TileTextBold>{plate}</TileTextBold></TileContentItem>
            <TileContentItem> Servicios: <TileTextBold>{services}</TileTextBold></TileContentItem>
            <TileContentItem> Ult. Service: <TileTextBold>{lastService}</TileTextBold></TileContentItem>
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