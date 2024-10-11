import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
z-index: 1000; /* Asegúrate que esté encima del contenido */
`
const MainContainer = styled.div `
display: flex;
flex-direction: column;
width: 36vw;
height: 26vh;
gap: 0.5%;
background: #D9D9D9;
border-radius: 10px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
position: relative;

 @media (max-width: 1100px) {
    width: 66vw;
  }
`
const IconX = styled(FaXmark)`
width: 3vh;
height: 3vh;
color: #2C518D;
padding-right: 5px;
position: absolute;
top: 0;
right: 0;
padding-top: 8px;
cursor: pointer;
`
const Container = styled.div`
height: 82%;
width: 100%;
display: flex;
align-items: flex-start;
justify-content: center;
position: absolute;
bottom: 0;
`
const Information = styled.div`
width: 90%;
height: 100%;
`
const TitleUpdateName = styled.h1`
margin: 0;
height: 15%;
font-family: "inter", sans-serif;
font-size: 33px;
color: #2C518D;
margin-bottom: 25px;
`
const Box = styled.div`
width: 100%;
height: 25%;
`
const Column = styled.div`
display: flex;
flex-direction: column;
height: 80%;
`
const BoxUpdateName = styled.input`
height: 100%;
background-color: #BABABA;
border-radius: 9px;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 10px;
`
const ColumnButtom = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;
height: 24%;
`
const ButtonSave = styled.button`
width: 20%;
height: 65%;
background: #2C518D;
color: white;
border-radius: 18px;
border: none;
box-shadow: -4px 4px 8px rgba(0, 0, 0, 0.2);

&:hover {
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);
}
`
export default function ModalUpdateName({isOpen, onClose, onSave, CurrentName}) {
  const [NewName, setNewName] = useState(CurrentName);

  useEffect(() => {
    if (isOpen) {
      setNewName(CurrentName)
    }
  }, [isOpen, CurrentName]);

  if (!isOpen) return null;

  const handlesave = () => {
    onSave(NewName);
    onClose();
  }
  return (
        <Overlay onClick={onClose}>
    <MainContainer onClick={(e) => e.stopPropagation()}>
        <IconX onClick={onClose}/>
        <Container>
          <Information>
            <TitleUpdateName>Cambiar nombre</TitleUpdateName>
            <Box>
              <Column>
                <BoxUpdateName
                  type='text'
                  value={NewName}
                  onChange={(e) => setNewName(e.target.value)} // actualiza el nombre
                />
                </Column>
            </Box>
            <ColumnButtom>
                <ButtonSave onClick={handlesave}>Guardar</ButtonSave>
            </ColumnButtom>
          </Information>
        </Container>
      </MainContainer>
    </Overlay>
  )
}