import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BiChevronDown } from "react-icons/bi";

const FormContainer = styled.div`
background: #D9D9D9;
height: 100%;
border-radius: 15px;
`
const DivInfo = styled.div`
margin-left: 40px;
margin-right: 40px;
margin-top: 15px;
display: flex;
flex-direction: column;
`
const Rowinfo = styled.div`
display: flex;
justify-content: space-between;
align-items: start;
`
const Title = styled.h3`
font-weight: 100;
margin-top: 10px;
margin-bottom: 10px;
font-family: "inter", sans-serif;
`
const InputContainer = styled.div`
position: relative;
display: flex;
justify-content: flex-end;
align-items: center;
`
const Box = styled.input`
font-size: 15px;
margin-top: 3px;
margin-bottom: 3px;
width: 370px;
height: 32px;
border-radius: 15px;
background: #BABABA;
border: none;
padding-left: 10px;
outline: none;
`
const BoxDescription = styled.textarea`
font-size: 15px;
margin-top: 3px;
margin-bottom: 3px;
width: 370px;
height: 100px;
border-radius: 15px;
background: #BABABA;
border: none;
padding-left: 10px;
padding-top: 10px;
resize: none; // para no poder cambiar el tamaño de la box
outline: none;
`
const Icons = styled(BiChevronDown)`
position: absolute;
margin-right: 3px;
width: 2vw;
height: 3vh;
cursor: pointer;
color: #838383;
`
const ButtonContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;
margin-top: 6px;
margin-right: 40px;
height: 7%;
`
const ButtonAdd = styled.button`
background: #2C518D;
color: #fff;
border: none;
width: 95px;
height: 25px;
border-radius: 15px;
font-family: "inter", sans-serif;
cursor: pointer;
`
export default function formContainer() {
  // para mostar la opcion de desplazar la información
  const [Trabajos, setTrabajos] = useState([]);
  const [Empleados, setEmpleados] = useState([]);

  return(
    <FormContainer>
      <DivInfo>
        <Rowinfo>
            <Title>Titulo</Title>
            <InputContainer>
            <Box> 
            </Box>
            </InputContainer>
          </Rowinfo>
          <Rowinfo>
            <Title>Trabajo</Title>
            <InputContainer>
            <Box> 
            </Box>
              <Icons/>
            </InputContainer>
        </Rowinfo>
        <Rowinfo>
            <Title>Asignado a</Title>
            <InputContainer>
            <Box> 
            </Box>
              <Icons/>
            </InputContainer>
        </Rowinfo>
        <Rowinfo>
            <Title>Repuestos</Title>
            <InputContainer>
            <Box> 
            </Box>
              <Icons/>
            </InputContainer>
        </Rowinfo>
        <Rowinfo>
            <Title>Descripción</Title>
            <BoxDescription></BoxDescription> {/* agregar barra de desplazamiento*/}
        </Rowinfo>
        <Rowinfo>
            <Title>Precio</Title>
            <InputContainer>
            <Box> 
            </Box>
              <Icons/>
            </InputContainer>
        </Rowinfo>
      </DivInfo>
      <ButtonContainer>
        <ButtonAdd>Agregar</ButtonAdd>
      </ButtonContainer>
    </FormContainer>
  )
}