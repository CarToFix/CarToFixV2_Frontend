import React from "react";
import styled from 'styled-components';
import Databox from "../components/DataBox"; //Componente para los datos de la tabla
import NewBudgetButton from "../components/ButtonNewBudget"; // boton de nuevo presupuesto
import AddictionalData from "../components/AddictionalData"; // componente para los datos adicionales

// contenedor principal
const OtherContainer = styled.div `
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
`
// contiene la sección de trabakos activos y la coluna con información adicional y confirmaciones recientes
const MainContainer = styled.div `
display: flex;
align-items: center;
justify-content: space-between;
width: 84vw;
height: 67vh;
gap: 0.5%;
margin-top: 100px;
`
//Div para la sección de trabajos activos
const ActiveJobBox  = styled.div `
background: #D9D9D9;
width: 60%;
height: 100%;
border-radius: 15px;
`
// Título de trabakos activos
const TitleActiveJob = styled.h1 `
font-family: "inter", sans-serif;
font-size: 6vh;
color: #2C518D;
text-align: center;
margin: 6% 5%;
display: flex;
align-items: center;
justify-content: center;
padding-top: 5px;
padding-bottom: 5px;

@media (max-width: 1100px) {
  font-size: 6vh;
  margin-right: 50px;
  margin-left: 50px;
}
`
// Contenedor para la tabla de trabajos activos
const DivTableActiveJob = styled.div `
display: flex;
justify-content: center;
align-items: center;
height: 45vh;
width: 100%;
`
// Tabla que muestra los trabajos activos
const TableActiveJob = styled.div`
height: 100%;
width: 94%;
margin-left: 20px;

@media (max-width: 1100px) {
margin-left: unset;
}
`
// columna para la sección de información adicional y confirmaciones recientes
const Column = styled.div `
display: flex;
flex-direction: column;
width: 40%;
height: 100%;
`
//Sección de confirmaciones recientes
const RecentConfirmations = styled.div `
background: #D9D9D9;
width: 100%;
height: 50vh;
border-radius: 15px;
`
// Título de confirmaciones recientes
const TitleRecentConfirmations = styled.h1 `
font-family: "inter", sans-serif;
font-size: 4vh;
color: #2C518D;
text-align: center;
margin: 5% 4%;
display: flex;
align-items: center;
justify-content: center;

 @media (max-width: 1100px) {
    font-size: 3vh;
  }
`
// Contenedor para la tavla de confirmaciones recientes
const DivTableRecentConfirmations = styled.div `
display: flex;
justify-content: center;
align-items: center;
height: 25vh;
width: 100%;
`
// tabla que muestra las confirmaciones recientes
const TableRecentConfirmations = styled.div`
height: 100%;
width: 94%;
`
// sección de informacion adicional
const AdditionalInformation = styled.div `
background: #D9D9D9;
width: 100%;
height: 35vh;
margin-bottom: 1%;
border-radius: 15px;
`
// fila para los componentes de datos adicionales (SVG y texto)
const RowSVG = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
height: 100%;
`
const result = [
	{ Marca: 'Toyota', Modelo: 'Corolla', Matricula: 'ABC-123', Trabajo: 'Reparación de motor' },
	{ Marca: 'Honda', Modelo: 'Civic', Matricula: 'XYZ-456', Trabajo: 'Cambio de aceite' },
	{ Marca:'Ford', Modelo: 'Focus', Matricula: 'DEF-789', Trabajo: 'Revisión general' },
	{ Marca: 'Toyota', Modelo: 'Corolla', Matricula: 'ABC-123', Trabajo: 'Reparación de motorrrr' },
	{ Marca: 'Toyota', Modelo: 'Corolla', Matricula: 'ABC-123', Trabajo: 'Reparación de motor' },
	{ Marca: 'Toyota', Modelo: 'Corolla', Matricula: 'ABC-123', Trabajo: 'Reparación de motor' },
	{ Marca: 'Toyota', Modelo: 'Corolla', Matricula: 'ABC-123', Trabajo: 'Reparación de motor' },
	{ Marca: 'Toyota', Modelo: 'Corolla', Matricula: 'ABC-123', Trabajo: 'Reparación de motor' },
	{ Marca: 'Toyota', Modelo: 'Corolla', Matricula: 'ABC-123', Trabajo: 'Reparación de motor' },
	{ Marca: 'Toyota', Modelo: 'Corolla', Matricula: 'ABC-123', Trabajo: 'Reparación de motor' },
	{ Marca: 'Toyota', Modelo: 'Corolla', Matricula: 'ABC-123', Trabajo: 'Reparación de motor' },
]
const headers = ["Matricula", "Trabajo"];
const confirm = [
	{ Matricula: 'abc4545', Trabajo: 'revision general'},
	{ Matricula: 'ash7854', Trabajo: 'Cambio de aceite'},
	{ Matricula: 'ash7854', Trabajo: 'Cambio de aceite'},
	{ Matricula: 'ash7854', Trabajo: 'Cambio de aceite'},
	{ Matricula: 'ash7854', Trabajo: 'Cambio de aceite'},
]

export default function Dashboard() {

return (
  <div>
    <OtherContainer>
      <MainContainer>
        <ActiveJobBox>
          <TitleActiveJob>Trabajos activos</TitleActiveJob>
          <DivTableActiveJob>
            <TableActiveJob>
              <Databox data={result} tableHeight='34vh'/> {/* Tabla de trabajos activos */}
            </TableActiveJob>
          </DivTableActiveJob>
        </ActiveJobBox>
				<Column>
          <AdditionalInformation>
            <RowSVG>
              <AddictionalData title='Presupuesto en espera'/>
              <AddictionalData title='Vehículos en el taller'/>
            </RowSVG>
          </AdditionalInformation>
          <RecentConfirmations>
            <TitleRecentConfirmations>Confirmaciones recientes</TitleRecentConfirmations>
              <DivTableRecentConfirmations>
                <TableRecentConfirmations>
                  <Databox headers={headers} data={confirm} tableHeight='17vh'/> {/* Tabla de confirmaciones recientes */}
                </TableRecentConfirmations>
              </DivTableRecentConfirmations>
          </RecentConfirmations>
				</Column>
			</MainContainer>
      <NewBudgetButton/>
		</OtherContainer>
		</div>
	)
}