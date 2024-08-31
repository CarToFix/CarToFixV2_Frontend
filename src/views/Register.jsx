import React from "react";
import { useForm } from "react-hook-form"
import styled from "styled-components";

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
const RightBlock = styled.div`
    background: #FFFFFF;
    height: 100vh;
    width: 50%;
    min-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const RegisterText = styled.div`
    font-family: "Inter", sans-serif;
    font-size: 7vw;
    max-height: 100%;
    color: #FFFFFF;
    font-weight: bolder;
    text-align: center;
`
const LoginBlock = styled.div`
    background: #FFFFFF;
    border: 2px solid #335EA5;
    border-radius: 15px;
    width: 50%;
    min-height: 85%;
    display: grid;
    grid-template-rows: 75% 15%;
    gap: 0px;
    align-items: center;
    align-content: center;
`
const EmailPasswordBlock = styled.div`
    background: none;
    width: 100%;
    min-height: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
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
const CheckboxPolitics = styled.input`
`
const ContainerCheck = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    font-size: 2.5vh;
`
const ContainerCheckboxRecuerdame = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #23406D;
    font-size: 80%;
`
const TextAdoveInput = styled.div`
    position: relative;
    top: 2vh;
    color: #23406D;
    font-family: "Inter", sans-serif;
    font-size: 2vh;
    background: #FFFFFF;
    padding-left: 5px;
    padding-right: 5px;
`
const ContainerTextAdoveInput = styled.div`
    min-width: 75%;
    display: flex;
   
`
const RequestButton = styled.button`
    height: 60%;
    width: 60%;
    border-radius: 30px;
    border: 0px;
    background: linear-gradient(0deg, #23406D, #335FA6);
    font-family: "Inter", sans-serif;
    font-size: 3.5vh;
    color: #FFFFFF;
`
const RequestButtonDiv = styled.div`
    height: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
`
const PoliticsLink = styled.a`
    color: #23406D;
    text-decoration: none;
    font-weight: bold;
    margin-left: 7px;
`
const FormRegister = styled.form`
    height: 100%;
    width: 100%;
`
export default function Register() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <Container>
            <LeftBlock>
                <RegisterText>
                    Solicitud de registro
                </RegisterText>
            </LeftBlock>
            <RightBlock>
                <LoginBlock>
                    <FormRegister id="CreateForm" onSubmit={handleSubmit(onSubmit)}>
                    <EmailPasswordBlock>
                        <ContainerTextAdoveInput>
                            <TextAdoveInput> Email </TextAdoveInput>
                        </ContainerTextAdoveInput>
                        <GenericInput autoComplete="off" spellCheck="false" {...register("email", {require: true})}></GenericInput>
                        <ContainerTextAdoveInput>
                            <TextAdoveInput> Nombre del dueño </TextAdoveInput>
                        </ContainerTextAdoveInput>
                        <GenericInput autoComplete="off" spellCheck="false" {...register("owner", {require: true})}></GenericInput>
                        <ContainerTextAdoveInput>
                            <TextAdoveInput> Nombre del taller </TextAdoveInput>
                        </ContainerTextAdoveInput>
                        <GenericInput autoComplete="off" spellCheck="false" {...register("workshop", {require: true})}></GenericInput>
                        <ContainerTextAdoveInput>
                            <TextAdoveInput> Celular </TextAdoveInput>
                        </ContainerTextAdoveInput>
                        <GenericInput autoComplete="off" spellCheck="false" {...register("phone", {require: true})}></GenericInput>
                        <ContainerTextAdoveInput>
                            <TextAdoveInput> Ciudad </TextAdoveInput>
                        </ContainerTextAdoveInput>
                        <GenericInput autoComplete="off" spellCheck="false" {...register("city", {require: true})}></GenericInput>
                        <ContainerTextAdoveInput>
                            <TextAdoveInput> Dirección </TextAdoveInput>
                        </ContainerTextAdoveInput>
                        <GenericInput autoComplete="off" spellCheck="false" {...register("address", {require: true})}></GenericInput>
                        <ContainerCheck>
                            <ContainerCheckboxRecuerdame>
                                <CheckboxPolitics type="checkbox"></CheckboxPolitics>
                                Acepto las 
                                <PoliticsLink>
                                politicas de privacidad
                                </PoliticsLink>
                            </ContainerCheckboxRecuerdame>
                        </ContainerCheck>
                    </EmailPasswordBlock>
                    </FormRegister>
                    <RequestButtonDiv>
                    <RequestButton type="submit" form="CreateForm">
                        Enviar solicitud
                    </RequestButton>
                </RequestButtonDiv>
                </LoginBlock>
                
            </RightBlock>
        </Container>
    )
}