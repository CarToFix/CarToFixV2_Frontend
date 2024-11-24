import React, { useState } from 'react';
import styled from 'styled-components';
import FormContainer from '../components/FormContainer';
import Plates from '../components/Plates'; //informacion sobres las placas
import JobListContainer from '../components/JobListContainer';
import SummaryContainer from '../components/SummaryContainer';

// Contenedor principal
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

border: 2px solid red;
flex-direction: row;
`
const InformationLeft = styled.div`
background: #FFF;
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
`
const Tilte = styled.h1`
font-family: "inter", sans-serif;
font-size: 6vh;
color: #2C518D;
margin-top: 25px;
margin-bottom: 25px;
`
const InformationRight = styled.div`
width: 47%;
height: 100%;
display: flex;
flex-direction: column;
`
export default function NewBudget() {
  const [jobs, setjobs] = useState([]);
  const addJob = (newJob) => {
    setjobs([...jobs, newJob]);
  }
  return (
    <OtherContainer>
      <MainContainer>
        <InformationLeft>
          <Tilte>NUEVO PRESUPUESTO</Tilte>
          <FormContainer addJob={addJob}/>
        </InformationLeft>
        <InformationRight>
          <Plates></Plates>
          <JobListContainer jobs={jobs}/>
          <SummaryContainer></SummaryContainer>
        </InformationRight>
      </MainContainer>
    </OtherContainer>
  )
}