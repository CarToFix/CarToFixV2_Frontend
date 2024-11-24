import React from "react";
import styled from "styled-components"

const ListContainer = styled.div`
background: #D9D9D9;
height: 45%;
margin-top: 18px;
border-radius: 10px;
`

const DivInfo = styled.div`
  margin-bottom: 14px;
  height: 65%;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 5px;
  overflow-y: auto;

  /* Reserva espacio para el scrollbar */
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #bababa;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #d9d9d9;
    border-radius: 8px;
  }
`;

const Information = styled.div`
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 96%;
  margin-bottom: 8px;
`;
const DivList = styled.div`
display: flex;
justify-content: space-between;
width: 85%;
`
const DescriptionList = styled.h4`
font-family: "inter", sans-serif;
font-weight: 100;
`
const PriceList = styled.h4`
font-family: "inter", sans-serif;
`
const DivButton = styled.div`
width: 15%;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
`
const ButtonView = styled.button`
background: #E67E22;
width: 55px;
height: 20px;
border-radius: 15px;
color: white;
border: none;
box-shadow: -4px 4px 8px rgba(0, 0, 0, 0.2);
font-family: "inter", sans-serif;
cursor: pointer;
`
const DivButtonSave = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 34px;
height: 18%;

`
const ButtonSave = styled.button`
background: #2C518D;
width: 95px;
height: 25px;
border-radius: 15px;
color: white;
border: none;
box-shadow: -4px 4px 8px rgba(0, 0, 0, 0.2);
font-family: "inter", sans-serif;
cursor: pointer;
`

export default function JobListContainer({jobs}) {
  return (
    <ListContainer>
      <DivInfo>
        {jobs.map((job, index) => (
          <Information key={index}>
          <DivList>
            <DescriptionList>{job.trabajo}</DescriptionList>
            <PriceList>{job.precio}</PriceList>
          </DivList>
          <DivButton>
            <ButtonView>Ver</ButtonView>
          </DivButton>
        </Information>
        ))}
      </DivInfo>
      <DivButtonSave>
        <ButtonSave>Guardar</ButtonSave>
      </DivButtonSave>
    </ListContainer>
  )
}