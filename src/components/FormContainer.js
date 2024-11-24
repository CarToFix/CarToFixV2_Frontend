import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BiChevronDown } from "react-icons/bi";
import axios from 'axios';
import { empleadosSimulados, repuestosSimulados, trabajosSimulados } from './MockData';

const Container = styled.div`
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
const OptionContainer = styled.div`
position: absolute;
top: 100%;
left: 0;
width: 100%;
max-height: 75px;
border: 1px solid #979696;
background: #D9D9D9;;
border-radius: 15px;
z-index: 1;
overflow-y: auto;
&::-webkit-scrollbar {
  width: 8px;
}
&::-webkit-scrollbar-thumb {
  background: #BABABA;
  border-radius: 8px;
  margin: 15px;
}
&::-webkit-scrollbar-track {
  background: #D9D9D9;
  border-radius: 8px;
  margin: 8px;
}
`
const Option = styled.div`
padding: 8px;
cursor: pointer;
background-color: ${({ selected }) => (selected ? '#eee' : '#BABABA')};
&:hover {
background-color: #f0f0f0;
}
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
export default function FormContainer({addJob}) {
  // Contiene los valores de cada campo
const [formState, setformState] = useState({
  trabajo: {input: '', selected: '', showOptions: false},
  empleado: {input: '', selected: '', showOptions: false},
  repuesto: {input: '', selected: '', showOptions: false},
  precio: ''
})
// Guarda las opciones disponibles para cada campo
const [option, setoption] = useState({
  trabajo: [],
  empleado: [],
  repuesto: []
})

  useEffect(() =>{
    setoption({
      trabajo: trabajosSimulados,
      empleado: empleadosSimulados,
      repuesto: repuestosSimulados
    })
  }, []);

  // Cuando se escribe en el campo esta función acrualiza el valor de input (field) y muestra las opciones (showoptions)
  const handleInputChange = (field, value) => {
    setformState(prevState => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        input: value,
        showOptions: true
      }
    }))
  };
  // Cuando se selecciona una opcion esto actualiza el selected y input con la opcion que se elige y oculta las opciones (showOptions)
  const handleSelectOption = (field, item) => {
    setformState(prevState => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        selected: item.nombre,
        input: item.nombre,
        showOptions: false
      }
    }))
  };
  // oculta o muestra las opciones
  const ToggleOtions = (field) => {
    setformState(prevState => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        showOptions: !prevState[field].showOptions
      }
    }))
  }
  // Filtra las opciones segun el texto
  const filteredOptions = (field) => {
    return option[field].filter(item =>
      item.nombre.toLowerCase().includes(formState[field].input.toLowerCase())
    )
  }
  const handleAddJob = () => {
    const newJob = {
      trabajo: formState.trabajo.selected || formState.trabajo.input,
      precio: formState.precio,
      empleado: formState.empleado.selected || formState.empleado.input,
      repuesto: formState.repuesto.selected || formState.repuesto.input,
    };
    addJob(newJob); // Llamada a la función para agregar el trabajo
    setformState({
      trabajo: { input: '', selected: '', showOptions: false },
      empleado: { input: '', selected: '', showOptions: false },
      repuesto: { input: '', selected: '', showOptions: false },
      precio: ''
    });
  };
  return(
    <Container>
      <DivInfo>
        <Rowinfo>
            <Title>Titulo</Title>
            <InputContainer>
            <Box></Box>
            </InputContainer>
          </Rowinfo>
          <Rowinfo>
            <Title>Trabajo</Title>
            <InputContainer>
            <Box
            value={formState.trabajo.input}
            onChange={(e) => handleInputChange('trabajo', e.target.value)}
            />
            <Icons onClick={() => ToggleOtions('trabajo')}/>
              {formState.trabajo.showOptions && (
                <OptionContainer>
                  {filteredOptions('trabajo').map((item) => (
                    <Option
                    key={item.id}
                    onClick={() => handleSelectOption('trabajo', item)}>
                      {item.nombre}
                    </Option>
                  ))}
                </OptionContainer>
              )}
            </InputContainer>
        </Rowinfo>
        <Rowinfo>
            <Title>Asignado a</Title>
            <InputContainer>
            <Box
            value={formState.empleado.input}
            onChange={(e) => handleInputChange('empleado', e.target.value)}
            />
            <Icons onClick={() => ToggleOtions('empleado')}/>
              {formState.empleado.showOptions && (
                <OptionContainer>
                  {filteredOptions('empleado').map((item) => (
                    <Option
                    key={item.id}
                    onClick={() => handleSelectOption('empleado', item)}>
                      {item.nombre}
                    </Option>
                  ))}
                </OptionContainer>
              )}
            </InputContainer>
        </Rowinfo>
        <Rowinfo>
            <Title>Repuestos</Title>
            <InputContainer>
            <Box
            value={formState.repuesto.input}
            onChange={(e) => handleInputChange('repuesto', e.target.value)}
            />
            <Icons onClick={() => ToggleOtions('repuesto')}/>
              {formState.repuesto.showOptions && (
                <OptionContainer>
                  {filteredOptions('repuesto').map((item) => (
                    <Option
                    key={item.id}
                    onClick={() => handleSelectOption('repuesto', item)}>
                      {item.nombre}
                    </Option>
                  ))}
                </OptionContainer>
              )}
            </InputContainer>
        </Rowinfo>
        <Rowinfo>
            <Title>Descripción</Title>
            <BoxDescription></BoxDescription> {/* agregar barra de desplazamiento*/}
        </Rowinfo>
        <Rowinfo>
            <Title>Precio</Title>
            <InputContainer>
            <Box
            value={formState.precio}
            onChange={(e) => setformState({...formState, precio: e.target.value})}/>
            </InputContainer>
        </Rowinfo>
      </DivInfo>
      <ButtonContainer>
        <ButtonAdd onClick={handleAddJob}>Agregar</ButtonAdd>
      </ButtonContainer>
    </Container>
  )
}