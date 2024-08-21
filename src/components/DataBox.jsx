import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table `
width: 100%;
max-height: ${({ tableHeight }) => tableHeight || '100%'};
table-layout: fixed;
border-spacing: 1px 5px;
`
const StyledTr = styled.tr` 
display: flex;
align-items: center;
justify-content: center;
border-bottom: 4px solid transparent;
padding-right: 10px;
`
const StyledTBody = styled.tbody `
display: block;
max-height: ${({ tableHeight }) => tableHeight || '100%'};

overflow-y: auto;
::-webkit-scrollbar {
width: 12px;
}

::-webkit-scrollbar-track {
background-color: transparent;
border-radius: 20px;
}
::-webkit-scrollbar-thumb {
background-color: #C3BFBF;
border-radius: 20px;
border: 2px solid;
}

scrollbar-width: thin;
scrollbar-color: #C3BFBF transparent;
`
const StyledThead = styled.thead `
display: grid;
margin-right: 9vh;
position: sticky;
top: 0;
z-index: 1;
border-bottom: 12px solid transparent;
font-size: 17px;
`
// Celdas del encabezado
const StyledTh = styled.th`
flex: 1;
padding: 5px;
padding-left: 15px;
text-align: left;
color: #2C518D;

border: 1px solid transparent;
background-color: #C9C9C9;

&:first-child {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}
&:last-child {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}
position: relative;

&:not(:first-child)::before {
content: '';
position: absolute;
left: 0;
top: 10%;
height: 80%;
width: 0.5px; /* Ancho de la línea delgada */
background-color: black;
}
`
const StyledTd = styled.td `

flex: 1;
background-color: #C9C9C9;
padding: 8px;
padding-left: 15px;
padding-right: 8px;
text-align: left;
color: black;
font-family: "inter", sans-serif;
font-size: 14px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

&:first-of-type {
border-top-left-radius: 30px;
border-bottom-left-radius: 30px;
}

&:last-of-type {
border-top-right-radius: 30px;
border-bottom-right-radius: 30px;
}

td:first-of-type {
border-top-left-radius: 30px;
border-bottom-left-radius: 30px;
}

td:last-of-type {
border-top-right-radius: 30px;
border-bottom-right-radius: 30px;
}

position: relative;

&:not(:first-child)::before {
content: '';
position: absolute;
left: 0;
top: 10%;
height: 80%;
width: 0.5px; /* Ancho de la línea delgada */
background-color: black;
}
`
const ButtonTable = styled.button `
font-family: "inter", sans-serif;
background-color: #2C518D;
color: white;
border: none;
padding: 4px 14px;
margin-left: 10px;
font-size: 12px;
cursor: pointer;
border-radius: 20px;
margin-top: 8px;
margin-bottom: 8px;
`
function HeaderTable ({headers}) { // Para el header de la tabla
  return (
    <StyledThead>
      <StyledTr>
        {headers.map((headers, index) => (
          <StyledTh key={index}>{headers}</StyledTh>
        ))}
      </StyledTr>
    </StyledThead>
    )
}

function BodyTable ({data, tableHeight}) {
  return (
    <StyledTBody tableHeight={tableHeight}>
      {data.map((row, index) => (
        <StyledTr key={index}>
          {Object.values(row).map((CurrentValue, index) => (
            <StyledTd key={index}>{CurrentValue}</StyledTd>
          ))}
          <ButtonTable>
              Ver
          </ButtonTable>

        </StyledTr>
      ))}
    </StyledTBody>
  )
}
export default function GenerarTable({headers, data, tableHeight}){
    if (data.length === 0)
      return null;
  
    const columns = headers || Object.keys(data[0]);

  return (
      <StyledTable tableHeight={tableHeight}>

          <HeaderTable headers={columns}/>
          <BodyTable data={data} tableHeight={tableHeight}/>

      </StyledTable>
  )
}