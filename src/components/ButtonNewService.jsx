import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const ButtonContainer = styled.div `
width: 7vw;
height: 7vw;
position: absolute;
right: 0;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;
`
const ServiceButton = styled.div `
width: 4vw;
height: 4vw;
background-color: #E67E22;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Icon = styled(FontAwesomeIcon)`
color: #ffffff;
font-size: 3vw;
`
export default function NewserviceButton() {
    return (
        <ButtonContainer>
            <ServiceButton>
                <Icon icon={faPlus}/>
            </ServiceButton>
        </ButtonContainer>
    )
}