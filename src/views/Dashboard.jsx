import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import Databox from "../components/DataBox";
import NewserviceButton from "../components/ButtonNewService";
import AddictionalData from "../components/AddictionalData";
import axios from 'axios';

const Headers = styled.div `
width: 100vw;
height: 12%;
background-color: #2C518D;
position: fixed;
top:0
`
const OtherContainer = styled.div `
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
`
const MainContainer = styled.div `
display: flex;
align-items: center;
justify-content: space-between;
width: 84vw;
height: 67vh;
gap: 0.5%;
margin-top: 100px;
`
const ActiveServiceBox  = styled.div `
background: #D9D9D9;
width: 60%;
height: 100%;
border-radius: 15px;
`
const TitleActiveService = styled.h1 `
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
`
const DivTableActiveService = styled.div `
display: flex;
justify-content: center;
align-items: center;
height: 45vh;
width: 100%;
`
const TableServiceActive = styled.div`
height: 100%;
width: 94%;
margin-left: 20px;
`
const Column = styled.div `
display: flex;
flex-direction: column;
width: 40%;
height: 100%;
`
const RecentConfirmations = styled.div `
background: #D9D9D9;
width: 100%;
height: 50vh;
border-radius: 15px;
`
const TitleRecentConfirmations = styled.h1 `
font-family: "inter", sans-serif;
font-size: 4vh;
color: #2C518D;
text-align: center;
margin: 5% 4%;
display: flex;
align-items: center;
justify-content: center;
`
const DivTableRecentConfirmations = styled.div `
display: flex;
justify-content: center;
align-items: center;
height: 25vh;
width: 100%;
`
const TableRecentConfirmations = styled.div`
height: 100%;
width: 94%;
`
const AdditionalInformation = styled.div `
background: #D9D9D9;
width: 100%;
height: 35vh;
margin-bottom: 1%;
border-radius: 15px;
`
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

const baseURL = 'https://static-clementine-krasnikot-100f316b.koyeb.app'
const [dashboardData, setDashboardData] = useState([])

useEffect(()=> {
 // const WorkshopName = localStorage.getItem('workshop_name')
  
  const WorkshopName = 'kjh'
  
  if (WorkshopName) {
    axios.get(`${baseURL}/api/v1/dashboard/recent_confirmed_workshop_quote_tasks?workshop_name=${WorkshopName}`)
    .then((res) => {
      if (res) {
        setDashboardData(res.data)
        console.log("dashboard data", dashboardData)
    }}
  
  )}})
  


return (
  <div>
    <OtherContainer>
      <Headers/>
      <MainContainer>
        <ActiveServiceBox>
          <TitleActiveService>Trabajos activos</TitleActiveService>
          <DivTableActiveService>
            <TableServiceActive>
              <Databox data={result} tableHeight='34vh'/>
            </TableServiceActive>
          </DivTableActiveService>
        </ActiveServiceBox>
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
                  <Databox headers={headers} data={confirm} tableHeight='17vh'/>
                </TableRecentConfirmations>
              </DivTableRecentConfirmations>
          </RecentConfirmations>
				</Column>
			</MainContainer>
      <NewserviceButton/>
		</OtherContainer>
		</div>
	)
}