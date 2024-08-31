import React from "react";
import styled from "styled-components";
import { IoIosAdd } from "react-icons/io";
import TextOfCursor from "./TextOfCurse";

const ButtonContainer = styled.div `
width: 20%;
height: 16%;
position: fixed;
bottom: 0;
right: 0;
`
const ServiceButton = styled.div `
position: absolute;
right: 2vh;
bottom: 2vh;
width: 4vw;
height: 4vw;
background-color: #E67E22;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Icon = styled(IoIosAdd)`
color: #ffffff;
font-size: 6vw;
`

export default function NewserviceButton() {
    return (
        <ButtonContainer >
            <TextOfCursor text='Nuevo presupuesto'>
                <ServiceButton>
                    <Icon icon={IoIosAdd}/>
                </ServiceButton>
            </TextOfCursor>
        </ButtonContainer>
    )
}