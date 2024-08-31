import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

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
    display: flex;
    align-items: center;
    justify-content: center;
`
const CarToFixText = styled.div`
    font-family: "Inter", sans-serif;
    font-size: 7vw;
    max-height: 100%;
    color: #FFFFFF;
    font-weight: bolder;
`
const LoginBlock = styled.div`
    background: #FFFFFF;
    border: 2px solid #335EA5;
    border-radius: 15px;
    width: 50%;
    min-height: 60%;
    display: grid;
    grid-template-rows: 45% 45%;
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
const LoginButtonBlock = styled.div`
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
const CheckboxRecuerdame = styled.input`
`
const ContainerCheckAndForgot = styled.div`
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
const ForgotPassword = styled.a`
    font-size: 80%;
    color: #23406D;
    text-decoration: none;
    text-align: right;
`
const EmailAndPassText = styled.div`
    position: relative;
    top: 2vh;
    color: #23406D;
    font-family: "Inter", sans-serif;
    font-size: 2vh;
    background: #FFFFFF;
    padding-left: 5px;
    padding-right: 5px;
`
const ContainerEmailAndPass = styled.div`
    min-width: 75%;
    display: flex;
   
`
const LoginButton = styled.button`
    height: 50%;
    width: 60%;
    border-radius: 30px;
    border: 0px;
    background: linear-gradient(0deg, #23406D, #335FA6);
    font-family: "Inter", sans-serif;
    font-size: 3.5vh;
    color: #FFFFFF;
`
const RegisterTextContainer = styled.div`
    font-size: 80%;
    height: 100%;
    color: #23406D;
`
const RegisterText = styled.a`
    font-weight: bold;
    text-decoration: none;
    text-align: right;
    margin-left: 10px;
`
const LoginButtonDiv = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    align-items: end;
    justify-items: center;
`
const FormLogin = styled.form`
    height: 100%;
    width: 100%;
`
export default function Login() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <Container>
            <LeftBlock>
                <CarToFixText>
                    CarToFix
                </CarToFixText>
            </LeftBlock>
            <RigthBlock>
                <LoginBlock>
                    <FormLogin id="CreateForm" onSubmit={handleSubmit(onSubmit)}> 
                    <EmailPasswordBlock>
                        <ContainerEmailAndPass>
                            <EmailAndPassText> Email </EmailAndPassText>
                        </ContainerEmailAndPass>
                        <GenericInput autoComplete="off" spellCheck="false" {...register("email", {require: true})}></GenericInput>
                        <ContainerEmailAndPass>
                            <EmailAndPassText> Contraseña </EmailAndPassText>
                        </ContainerEmailAndPass>
                        <GenericInput type="password" {...register("password", {require: true})}></GenericInput>
                        <ContainerCheckAndForgot>
                            <ContainerCheckboxRecuerdame>
                                <CheckboxRecuerdame type="checkbox"></CheckboxRecuerdame>
                                Recuerdame
                            </ContainerCheckboxRecuerdame>
                            <ForgotPassword><Link to='/UpdatePassword'>Olvidé mi contraseña</Link></ForgotPassword>
                        </ContainerCheckAndForgot>
                    </EmailPasswordBlock>
                    </FormLogin>
                    <LoginButtonBlock>
                        <LoginButtonDiv >
                            <LoginButton type="submit" form="CreateForm">Iniciar sesión</LoginButton>
                        </LoginButtonDiv>
                        <RegisterTextContainer>
                            ¿Eres nuevo? 
                            <RegisterText><Link to='/Registrarse'>Registrate</Link></RegisterText>
                        </RegisterTextContainer>
                    </LoginButtonBlock>
                    
                </LoginBlock>
            </RigthBlock>
        </Container>
    )
}