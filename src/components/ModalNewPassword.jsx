import React, { useState } from "react";
import styled from "styled-components";
import { FaXmark } from "react-icons/fa6";
import { TbEyeClosed } from "react-icons/tb";
import { TbEye } from "react-icons/tb";

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
height: 36vh;
gap: 0.5%;
background: #D9D9D9;
border-radius: 10px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

 @media (max-width: 1100px) {
    width: 66vw;
  }
`
const DivIcon = styled.div`
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
height: 85%;
width: 100%;
display: flex;
align-items: flex-start;
justify-content: center;
`
const Information = styled.div`
width: 90%;
height: 100%;
`
const TitlePassword = styled.h1`
margin: 0;
height: 15%;
font-family: "inter", sans-serif;
font-size: 33px;
color: #2C518D;
margin-bottom: 30px;
`
const Box = styled.div`
width: 100%;
height: 55%;
`
const Column = styled.div`
display: flex;
flex-direction: column;
height: 70%;
`
const Row = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
`
const TitleNewPassword = styled.h1`
font-family: "inter", sans-serif;
font-size: 18px;
color: black;
margin-bottom: 8px;
margin-top: 8px;
font-weight: 100;
`
const BoxPassword = styled.div`
width: 63%;
height: 100%;
background-color: #BABABA;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 10px;
`
const IconEyeClosed = styled(TbEyeClosed)`
width: 3vh;
height: 3vh;
color: #2C518D;
padding-right: 10px;
cursor: pointer;
`
const IconEye = styled(TbEye)`
font-family: "inter", sans-serif;
width: 3vh;
height: 3vh;
color: #2C518D;
padding-right: 10px;
cursor: pointer;
`
const ColumnButtom = styled.div`
display: flex;
justify-content: flex-end;
height: 30%;
margin-top: 6px;
`
const RowButtom = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
height: 100%;
width: 100%;
`
const ButtonSave = styled.button`
width: 20%;
height: 65%;
background: #2C518D;
color: white;
border-radius: 10px;
border: none;
box-shadow: -4px 4px 8px rgba(0, 0, 0, 0.2);

&:hover {
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);
}
`
const Edit = styled.input`
background-color: #BABABA;
height: 93%;
width: 100%;
border-radius: 15px;
border: none;
outline: none;
`
const ErrorMessage = styled.p`
  width: 80%;
  color: red;
  font-size: 14px;
  margin-top: 10px;
  margin-right: 15px;
  text-align: center;
`;
export default function ModalNewPassword({isOpen, onClose, onSave}) {
  const [password, setpassword] = useState(''); // para Nueva contraseña
  const [confirmPassword, setconfirmPassword] = useState(''); // para confirmar contraseña
  const [error, setError] = useState('') // por si las contraseñas no coinciden
  const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // es es para que tenga al menos una letra en minuscula, al menos una en mayuscula, por lo menos un numero y contenga un minimo de 8 caracteres

  // Para que la contraseña sea visible o no lo sea
  const [showpassword, setshowpassword] = useState(false);
  const [ShowRepeatPassword, setShowRepeatPassword] = useState(false);

  const ChangePassword = (e) => {
    setpassword(e.target.value);
  }
  const ChangeRepeatPassword = (e) => {
    setconfirmPassword(e.target.value);
  }
  const Submit = (e) => {
    e.preventDefault(); // para evitar que la pagina se recargue de forma inecesaria
  
    //Para validar que las contraseñas cumplen con los rquisitos
  if (!PasswordRegex.test(password)) {
    setError(
      "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número."
    );
    return;
  }
  if (password === confirmPassword) {
    onSave(password);
    setError('');
    onClose(); // para cerrar el modal luego de que se guarde la nueva contraseña
  } else {
    setError('Las contraseñas no coinciden')
  }
};
// para que la contraseña sea visible o no
const PasswordVisibility = () => {
  setshowpassword(!showpassword)
}
const RepeatPasswordVisibility = () => {
  setShowRepeatPassword(!ShowRepeatPassword)
}

if (!isOpen) return null;

return (
  <Overlay onClick={(e) => e.stopPropagation()}>
    <MainContainer>
      <DivIcon>
        <IconX onClick={onClose}/>
      </DivIcon>
      <Container>
        <Information onSubmit={Submit}>
          <TitlePassword>Cambiar contraseña</TitlePassword>
          <Box>
            <Column>
              <Row>
                <TitleNewPassword>Nueva contaseña</TitleNewPassword>
                <BoxPassword>
                  <Edit
                    value={password}
                    type={showpassword ? 'text' : 'password'}
                    onChange={ChangePassword}/>
                  {showpassword ? (
                    <IconEye onClick={PasswordVisibility}/>
                  ) : (
                    <IconEyeClosed onClick={PasswordVisibility}/>
                  )}
                </BoxPassword>
              </Row>
              <Row>
                <TitleNewPassword>Repetir contaseña</TitleNewPassword>
                <BoxPassword>
                  <Edit
                    value={confirmPassword}
                    type={ShowRepeatPassword? 'text' : 'password'}
                    onChange={ChangeRepeatPassword}/>
                  {ShowRepeatPassword? (
                    <IconEye onClick={RepeatPasswordVisibility}/>
                  ) : (
                    <IconEyeClosed onClick={RepeatPasswordVisibility}/>
                  )}
                </BoxPassword>
              </Row>
            </Column>
            <ColumnButtom>
              <RowButtom>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ButtonSave onClick={Submit}
                  type="Submit">
                    Guardar
                    </ButtonSave>
              </RowButtom>
            </ColumnButtom>
          </Box>
        </Information>
      </Container>
    </MainContainer>
  </Overlay>
)
}