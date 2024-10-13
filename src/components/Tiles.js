/**
 * This component is the one responsible for rendering the tiles 
 * Also render the modal with the corresponding id
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { workData } from '../data/data';
import Modal from './ModalDetail';

const SecondDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 50px 10px;
  height: 90%;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box; 
  border-radius: 30px;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background: #D9D9D9;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background: white;
    border-radius: 8px;
  }
`;

const Tile = styled.div`
  background-color: #D9D9D9;
  border-radius: 30px 0 30px 0;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 290px;
  height: 310px;
  padding: 10px 15px 0px 15px;
  font-family: "inter", sans-serif;
  box-sizing: border-box;
`;

const TileContent = styled.ul`
  font-size: 20px;
  list-style: none;
  list-style-position: inside;
  color: #2F2E2E;
  padding: 0;
  margin: 0;
`;

const TileContentItem = styled.li`
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 
  &:last-child {
    margin-bottom: 0;
  }
`;

const TileHeader = styled.h2`
  font-size: 30px;
  margin: 15px 0 0 0;
  color: #2C518D;
  text-align: center;
`;

const TileTextBold = styled.span`
  font-weight: bold;
`;

const TileButtonContainer = styled.div`
  display: flex;
  justify-content: center; 
  button {
    font-family: "inter", sans-serif;
    background-color: #2C518D;
    color: white;
    border: none;
    border-radius: 20px;
    width: 50%;
    padding: 8px;
    margin: 0 0 20px 0;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.3);
  }
`;

const Tiles = () => {
  const [selectedTileId, setSelectedTileId] = useState(null);
  const openModal = (id) => {
    setSelectedTileId(id);
  };
  const closeModal = () => {
    setSelectedTileId(null);
  };
  const tile = workData.find(tile => tile.id === selectedTileId);

  return (
    <>
      <SecondDiv>
        {workData.map(({ id, brand, model, employee, status }) => (
          <Tile key={id}>
            <TileHeader>{brand}</TileHeader>
            <TileContent>
              {model && <TileContentItem> Modelo: <TileTextBold>{model}</TileTextBold></TileContentItem>}
              {employee && <TileContentItem> Matricula: <TileTextBold>{employee}</TileTextBold></TileContentItem>}
              {status && <TileContentItem> Servicios: <TileTextBold><input type="checkbox" />{status}</TileTextBold></TileContentItem>}
            </TileContent>
            <TileButtonContainer>
              <button onClick={() => openModal(id)}>Ver</button>
            </TileButtonContainer>
          </Tile>
        ))}
      </SecondDiv>
      {selectedTileId && (
        <Modal onClose={closeModal} info={tile} />
      )}
    </>
  );
};
export default Tiles;
