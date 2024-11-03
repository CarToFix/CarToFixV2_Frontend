import React from "react";
import styled from "styled-components";

const SummmaryMain = styled.div`
background: #D9D9D9;
height: 30%;
margin-top: 18px;
border-radius: 10px;
`
const DivInfo = styled.div`
height: 60%;
display: flex;
flex-direction: row;
align-items: center;
`
const Container = styled.div`
width: 100%;
height: 90%;
display: flex;
flex-wrap: wrap;
align-content: space-around;
justify-content: space-around;
margin-left: 20px;
margin-right: 20px;
margin-top: 20px;
`
const DetailsContainer = styled.div`
background: #BABABA;
width: 45%;
height: 32px;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: space-around;
padding-left: 5px;
`
const Label = styled.span`
font-family: "inter", sans-serif;
width: 40%;
color: black;
font-size: 14px;
`
const Value = styled.input`
font-family: "inter", sans-serif;
text-align: end;
width: 45%;
background: #BABABA;
border: none;
outline: none;
font-weight: bold;
font-size: 14px;
padding-right: 5px;
`
const DivButtons = styled.div`
height: 32%;
display: flex;
justify-content: space-between;
align-items: flex-end;
margin-left: 20px;
margin-right: 20px;
`
const Buttonsleft = styled.div`
width: 30%;
display: flex;
flex-direction: row;
align-items: center;
`
const Buttonsright = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
width: 50%;
`
const Buttons= styled.button`
margin-left: 10px;
margin-right: 10px;
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
export default function SummaryContainer() {
  return (
    <SummmaryMain>
      <DivInfo>
        <Container>
          <DetailsContainer>
            <Label>Vigencia hasta:</Label>
              <Value type="date"></Value>
          </DetailsContainer>
          <DetailsContainer>
            <Label>Cuotas:</Label>
            <Value></Value>
          </DetailsContainer>
          <DetailsContainer>
            <Label>Mano de obras:</Label>
            <Value></Value>
          </DetailsContainer>
          <DetailsContainer>
            <Label>Total:</Label> {/* luego hacer para que sume el total */}
            <Value></Value>
          </DetailsContainer>
        </Container>
      </DivInfo>
      <DivButtons>
        <Buttonsleft>
          <Buttons>Cancelar</Buttons>
        </Buttonsleft>
        <Buttonsright>
          <Buttons>Confirmar</Buttons>
          <Buttons>Enviar</Buttons>
        </Buttonsright>
      </DivButtons>
    </SummmaryMain>
  )
}