import React from 'react';
import styled from 'styled-components';

// Estiliza la tabla en general
const StyledTable = styled.table `
width: 100%;
max-height: ${({ tableHeight }) => tableHeight || '100%'};
table-layout: fixed;
border-spacing: 1px 5px;
`
// Estiliza las filas
const StyledTr = styled.tr` 
display: flex;
align-items: center;
justify-content: center;
border-bottom: 4px solid transparent;
padding-right: 10px;
`
// Estiliza el encabezado de la tabla
const StyledThead = styled.thead `
display: grid;
margin-right: 9vh;
position: sticky;
top: 0;
z-index: 1;
border-bottom: 12px solid transparent;
font-size: 17px;
`
// Estiliza el cuerpo de la tabla
const StyledTBody = styled.tbody`
  display: block;
  max-height: ${({ tableHeight }) => tableHeight || '100%'};
  overflow-y: auto;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: #BABABA;
      border-radius: 8px;
    }
    &::-webkit-scrollbar-track {
      background: #D9D9D9;
      border-radius: 8px;
  }
`
// Celdas del encabezado
const StyledTh = styled.th`
flex: 1; // hace que las celdas ocupe todo el espacio que le proporciono a la tabla
padding: 5px;
padding-left: 15px;
text-align: left;
color: #2C518D;
border: 1px solid transparent;
background-color: #C9C9C9;

// Redondea la primera y ultima celda de cada fila
&:first-child {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}
&:last-child {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}
// Para hacer la linea entre celdas
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
// Estiliza las celdas del body de la tabla
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
// Estiliza el botón
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
function HeaderTable ({headers}) { // Para el encabezado de la tabla
  return (
    <StyledThead>
      <StyledTr>
        {headers.map((headers, index) => (
          <StyledTh key={index}>{headers}</StyledTh> // mapea los nombres de las columnas y genera una celda por cada uno
        ))}
      </StyledTr>
    </StyledThead>
    )
}

function BodyTable ({data, tableHeight}) { // Para el cuerpo de la tabla
  return (
    <StyledTBody tableHeight={tableHeight}>
      {data.map((row, index) => (
        <StyledTr key={index}>
          {Object.values(row).map((CurrentValue, index) => (
            <StyledTd key={index}>{CurrentValue}</StyledTd> // mapea los valores de cada fila y genera celdas por cada valor
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
      return null; // Si no hay datos, no se renderiza la tabla
  
    const columns = headers || Object.keys(data[0]); // si el 'headers no se proporciona, se utilizan las claves del primer objeto en 'data' como nombres de las columnas

  return (
      <StyledTable tableHeight={tableHeight}>
          <HeaderTable headers={columns}/> {/* Genera el encabezado de la tabla */}
          <BodyTable data={data} tableHeight={tableHeight}/> {/* Genera el cuerpo de la tabla */}
      </StyledTable>
  )
}