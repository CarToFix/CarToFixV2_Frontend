import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaXmark } from "react-icons/fa6";

const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, 0.5);
backdrop-filter: blur(4px);
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;
`
const MainContainer = styled.div `
display: flex;
flex-direction: column;
width: 35vw;
height: 60vh;
gap: 0.5%;
background: #D9D9D9;
border-radius: 10px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

 @media (max-width: 1100px) {
    width: 66vw;
  }
`
const MainContainerSecond = styled.div `
display: flex;
flex-direction: column;
width: 35vw;
height: 40vh;
gap: 0.5%;
background: #D9D9D9;
border-radius: 10px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

 @media (max-width: 1100px) {
    width: 66vw;
  }
`
const DivIcon = styled.div`
height: 10%;
display: flex;
justify-content: flex-end;
align-items: center;
cursor: pointer;
`
const DivIconSecond = styled.div`
height: 15%;
display: flex;
justify-content: flex-end;
align-items: center;
cursor: pointer;
`
const IconX = styled(FaXmark)`
width: 3vh;
height: 3vh;
color: #2C518D;
padding-right: 10px;
`
const Container = styled.div`
height: 90%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
text-align: center;
margin: 0;
height: 15%;
font-family: "inter", sans-serif;
font-size: 33px;
color: #2C518D;
margin-bottom: 5px;
margin-top: 0px;
`
const TitleSecond = styled.h1`
text-align: center;
margin: 0;
height: 15%;
font-family: "inter", sans-serif;
font-size: 33px;
color: #2C518D;
margin-bottom: 20px;
margin-top: 0;
`
const Box = styled.div`
width: 100%;
height: 70%;
`
const Column = styled.div`
display: flex;
flex-direction: column;
`
const Row = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
`
const TitleNew = styled.h1`
font-family: "inter", sans-serif;
font-size: 18px;
color: black;
margin-bottom: 8px;
margin-top: 8px;
font-weight: 100;
`
const BoxNew = styled.input`
width: 63%;
height: 32px;;
background-color: #BABABA;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 10px;
border: none;
`
const Information = styled.div`
width: 90%;
height: 100%;
`
const ColumnButtom = styled.div`
display: flex;
justify-content: flex-end;
height: 15%;
margin-top: 6px;
`
const RowButtom = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;
height: 100%;
width: 100%;
`
const ButtonSave = styled.button`
width: 20%;
height: 65%;
background: #E67E22;
color: white;
border-radius: 15px;
border: none;
box-shadow: -4px 4px 8px rgba(0, 0, 0, 0.2);

&:hover {
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);
}
`
const ButtonSaveSecond = styled.button`
width: 20%;
height: 85%;
background: #E67E22;
color: white;
border-radius: 15px;
border: none;
box-shadow: -4px 4px 8px rgba(0, 0, 0, 0.2);
margin-left: 5px;
&:hover {
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);
}
`
const ButtonBackSecond = styled.button`
width: 20%;
height: 85%;
background: #2C518D;
color: white;
border-radius: 15px;
border: none;
box-shadow: -4px 4px 8px rgba(0, 0, 0, 0.2);
margin-left: 5px;
&:hover {
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);
}
`
const ColumnButtomSecond = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;
height: 15%;
`
const ModalSecond = ({ onClose, onBack, onSave}) => {
  
  const handleSave = () => {
    onSave();
  }
  return(
    <Overlay>
      <MainContainerSecond>
        <DivIconSecond>
          <IconX onClick={onClose}/>
        </DivIconSecond>
        <Container>
          <Information>
            <TitleSecond>Nuevo cliente</TitleSecond>
            <Box>
            <Column>
              <Row>
                <TitleNew>Propietario</TitleNew>
                <BoxNew></BoxNew>
              </Row>
              <Row>
                <TitleNew>Mail de contacto</TitleNew>
                <BoxNew></BoxNew>
              </Row>
              <Row>
                <TitleNew>Celular</TitleNew>
                <BoxNew></BoxNew>
              </Row>
            </Column>
            <ColumnButtomSecond>
              <RowButtom>
                <ButtonBackSecond onClick={onBack}>Atras</ButtonBackSecond>
                <ButtonSaveSecond onClick={handleSave}>Guardar</ButtonSaveSecond>
              </RowButtom>
            </ColumnButtomSecond>
            </Box>
          </Information>
        </Container>
      </MainContainerSecond>
    </Overlay>
  )
}
export default function ModalNewVehicle({onClose, onSave}) {
  const [showfirstmodal, setshowfirstmodal] = useState(true);
  const [showSecondModal, setshowSecondModal] = useState(false);

  const handleNext = () => {
    setshowfirstmodal(false);
    setshowSecondModal(true);
  }
  const handleBack = () => {
    setshowfirstmodal(true);
    setshowSecondModal(false);
  }
  const handleCloseAll = () => {
    setshowfirstmodal(false);
    setshowSecondModal(false);
    onClose();
  }
  const handleSave = () => {
    onSave();
    console.log('informacion guardada');
    handleCloseAll();
  }

  return(
    <>
    { showfirstmodal && (
    <Overlay>
      <MainContainer>
        <DivIcon>
          <IconX onClick={handleCloseAll}/>
        </DivIcon>
        <Container>
          <Information>
          <Title>Nuevo vehiculo</Title>
          <Box>
            <Column>
              <Row>
                <TitleNew>Matrícula</TitleNew>
                <BoxNew></BoxNew>
              </Row>
              <Row>
                <TitleNew>Tipo de vehículo</TitleNew>
                <BoxNew></BoxNew>
              </Row>
              <Row>
                <TitleNew>Marca</TitleNew>
                <BoxNew></BoxNew>
              </Row>
              <Row>
                <TitleNew>Modelo</TitleNew>
                <BoxNew></BoxNew>
              </Row>
              <Row>
                <TitleNew>Color</TitleNew>
                <BoxNew></BoxNew>
              </Row>
              <Row>
                <TitleNew>Kilometraje</TitleNew>
                <BoxNew></BoxNew>
              </Row>
            </Column>
            <ColumnButtom>
              <RowButtom>
                <ButtonSave onClick={handleNext}>
                    Siguiente
                    </ButtonSave>
              </RowButtom>
            </ColumnButtom>
          </Box>
          </Information>
        </Container>
      </MainContainer>
    </Overlay>
    )}
    {showSecondModal && 
      <ModalSecond 
      onClose={handleCloseAll}
      onBack={handleBack}
      onSave={handleSave}
    />}
  </>
  )
}