import React from "react";
import styled from "styled-components";
import edit from "../assets/Icons/edit.svg"
import { FaX } from "react-icons/fa6";

const Headers = styled.div `
width: 100vw;
height: 12%;
background: linear-gradient(3deg, #23406D, #335FA6);
position: fixed;
top:0;

display: flex;
justify-content: flex-end;
align-items: center;
`
const IconX = styled(FaX)`
width: 4vh;
margin-right: 20px;
color: white;
height: 4vh;
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
align-items: end;
justify-content: center;
width: 84vw;
height: 67vh;
gap: 0.5%;
margin-top: 100px;
`
const Container = styled.div`
background: #D9D9D9;
border-radius: 10px;
height: 90%;
width: 95%;
`
const Column = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 95%;
height: 100%;
`
const Title = styled.h1
`font-family: "inter", sans-serif;
font-size: 43px;
align-self: flex-start;
padding-left: 20px;
color: #2C518D;
margin: 10px;

 @media (max-width: 1000px) {
    font-size: 35px;
  }
`
const Row = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 100%;
`
const Profile = styled.div`
width: 45%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

 @media (max-width: 1300px) {
    width: 35%;
  }
`
const InformationGeneral = styled.div`
width: 55%;
display: flex;
justify-content: flex-start;
align-items: center;

 @media (max-width: 1300px) {
    width: 70%;
  }
`
const DivInfo = styled.div`
width: 76%;
height: 68%;
display: flex;
flex-direction: column;

 @media (max-width: 1300px) {
    width: 95%;
  }
   @media (max-width: 1000px) {
    width: 95%;
    font-size: 12px;
  }
`
const RowInfo = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
height: 100%;
`
const Box = styled.div`
background-color: #BABABA;
height: 80%;
width: 75%;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 10px;
`
const TitleInfo = styled.h3`
width: 20%;
margin: 0;
text-align: end;
font-family: "inter", sans-serif;
`
// Icono para editar texto
const ImagenEditSVG = styled.img`
width: 4%;
margin-right: 10px;
cursor: pointer;
`
// Para foto de perfil
const Photo = styled.div`
background: linear-gradient(90deg, #335FA6, #23406D);
width: 14vw;
height: 14vw;
border-radius: 100%;
border: 4px solid white;

 @media (max-width: 1000px) {
    width: 15vw;
    height: 15vw;
  }
`
// nombre CarToFix
const CarToFix = styled.h1`
color: #2C518D;
font-family: "inter", sans-serif;
font-size: 40px;

 @media (max-width: 1000px) {
    font-size: 35px;
  }
`
export default function Settings() {
  return (
    <OtherContainer>
      <Headers>
        <IconX/>
      </Headers>
      <MainContainer>
        <Column>
          <Title>CONFIGURACION DEL TALLER</Title>
          <Container>
            <Row>
              <Profile>
                <Photo>
                </Photo>
                <CarToFix> CarToFix</CarToFix>
              </Profile>
              <InformationGeneral>
                <DivInfo>
                  <RowInfo>
                  <TitleInfo>Correo</TitleInfo>
                  <Box>correo_del_tallero_o_dueño@gmail.com
                    <ImagenEditSVG src={edit} alt="edit" role="button"/>
                  </Box>
                  </RowInfo>
                  <RowInfo>
                  <TitleInfo>Dueño</TitleInfo>
                  <Box>Francisco
                    <ImagenEditSVG src={edit} alt="edit" role="button"/>
                  </Box>
                  </RowInfo>
                  <RowInfo>
                  <TitleInfo>Ciudad</TitleInfo>
                  <Box>Canelones
                    <ImagenEditSVG src={edit} alt="edit" role="button"/>
                  </Box>
                  </RowInfo>
                  <RowInfo>
                  <TitleInfo>Dirección</TitleInfo>
                  <Box>La Paz, Treinta y tres 562
                    <ImagenEditSVG src={edit} alt="edit" role="button"/>
                  </Box>
                  </RowInfo>
                  <RowInfo>
                  <TitleInfo>Contraseña</TitleInfo>
                  <Box>********
                    <ImagenEditSVG src={edit} alt="edit" role="button"/>
                  </Box>
                  </RowInfo>
                  <RowInfo>
                  <TitleInfo>Celular</TitleInfo>
                  <Box>095 555 555
                    <ImagenEditSVG src={edit} alt="edit" role="button"/>
                  </Box>
                  </RowInfo>
                </DivInfo>
              </InformationGeneral>
            </Row>
          </Container>
        </Column>
      </MainContainer>
    </OtherContainer>
  )
}