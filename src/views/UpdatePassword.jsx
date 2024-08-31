import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form"

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000000;
`
const LeftBlock = styled.div`
    background: linear-gradient(70deg, #23406D, #335FA6);
    height: 100%;
    widht: 50%;
    min-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const RigthBlock = styled.div`
    background: #FFFFFF;
    height: 100vh;
    width: 50%;
    min-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const UpdatePasswordText = styled.div`
    font-family: "Inter", sans-serif;
    font-size: 7vw;
    max-height: 100%;
    color: #FFFFFF;
    font-weight: bolder;
    text-align: center;
`
const PasswordBlock = styled.div`
    background: #FFFFFF;
    border: 2px solid #335EA5;
    border-radius: 15px;
    width: 50%;
    min-height: 60%;
    display: grid;
    grid-template-rows: 48% 32%;
    gap: 0px;
    align-items: center;
    align-content: center;
`
const PasswordTopBlock = styled.div`
    background: none;
    width: 100%;
    min-height: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    gap: 0px;
`
const PasswordButtonBlock = styled.div`
    background: none;
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    justify-items: center;
    grid-template-rows: 60% 40%;
    gap: 0px;
`
const GenericInput = styled.input`
    border: 2px solid #23406D;
    background: #FFFFFF;
    outline: none;
    border-radius: 8px;
    height: 80%;
    min-height: 20px;
    width: 80%;
    font-size: 110%;
`
const PassText = styled.div`
    position: relative;
    top: 2.2vh;
    color: #23406D;
    font-family: "Inter", sans-serif;
    font-size: 2vh;
    background: #FFFFFF;
    padding-left: 5px;
    padding-right: 5px;
`
const ContainerPass = styled.div`
    min-width: 75%;
    display: flex;
   
`
const PasswordButton = styled.button`
    height: 75%;
    width: 70%;
    border-radius: 30px;
    border: 0px;
    background: linear-gradient(0deg, #23406D, #335FA6);
    font-family: "Inter", sans-serif;
    font-size: 3.5vh;
    color: #FFFFFF;
`
const PasswordButtonDiv = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    align-items: end;
    justify-items: center;
`
const FormPassword = styled.form`
    height: 100%;
    width: 100%;
`
const HiddenErrorText= styled.div`
    visibility: hidden;
    color: #FF0000;
    margin-top: 10px;
    width: 80%;
`

export default function UpdatePassword() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {if (data.password1 !== data.password2) {
        const hiddentext = document.getElementById('hiddentext');
        hiddentext.style.visibility = 'visible';
    } else {
        const hiddentext = document.getElementById('hiddentext');
        hiddentext.style.visibility = 'hidden';
    };
    console.log(data);
    }

    return (
        <Container>
            <LeftBlock>
                <UpdatePasswordText>
                    Actualice su contraseña
                </UpdatePasswordText>
            </LeftBlock>
            <RigthBlock>
                <PasswordBlock>
                    <FormPassword id="CreateForm" onSubmit={handleSubmit(onSubmit)}> 
                    <PasswordTopBlock>
                        <ContainerPass>
                            <PassText> Nueva contraseña </PassText>
                        </ContainerPass>
                        <GenericInput type="password" {...register("password1", {require: true})}></GenericInput>
                        <ContainerPass>
                            <PassText> Confirmar nueva contraseña </PassText>
                        </ContainerPass>
                        <GenericInput type="password" {...register("password2", {require: true})}></GenericInput>
                        <HiddenErrorText id='hiddentext'>
                            Las contraseñas no coinciden.
                        </HiddenErrorText>
                    </PasswordTopBlock>
                    </FormPassword>
                    <PasswordButtonBlock>
                        <PasswordButtonDiv >
                            <PasswordButton type="submit" form="CreateForm">Cambiar contraseña</PasswordButton>
                        </PasswordButtonDiv>
                    </PasswordButtonBlock>
                </PasswordBlock>
            </RigthBlock>
        </Container>
    )
}