import React from "react";
import styled from "styled-components";
import { Input } from "antd";

export const SearchPlate = () => {
    return (
        <>
            <Container>
                <Line>
                    <Matricula>Matricula</Matricula>
                </Line>
                <InputWrapper>
                    <StyledInput />
                    <UnderLine>-----------</UnderLine>
                </InputWrapper>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 48%;
    border: solid 2px #2C518D;
    border-radius: 10px;
`

const Line = styled.div`
    height: 40%;
    background-color: #2C518D;
    border-radius: 5px 5px 0 0;
`

const Matricula = styled.p`
    margin: 0;
    text-align: center;
    font-size: 24px;
    color: white;
`

const InputWrapper = styled.div`
    position: relative; 
    height:60%;
    width: 100%;
`

const StyledInput = styled(Input)`
    border: none;
    box-shadow: none;
    border-radius: 0;
    font-size: 24px;
    text-align: center;
    position: relative;
    z-index: 2;
    background-color: transparent;

    &:hover{
        background-color: transparent;
    }

    &:focus {
        outline: none;
        box-shadow: none;
        border: 0;
        background-color: transparent;
    }
`

const UnderLine = styled.p`
    margin: 0;
    font-size: 32px;
    color: #b9b9b9;
    width: 100%;
    font-weight: 800;
    text-align: center;
    position: absolute;
    top: 30%;
    z-index: 1;
    &:hover {
    cursor:default;
    }
`