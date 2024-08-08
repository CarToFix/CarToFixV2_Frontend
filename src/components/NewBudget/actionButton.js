import React from "react";
import styled from "styled-components";

const data = { text: "Buscar Matricula" }

export const ActionButton = () => {
    return (
        <>
            <Container onClick={() => console.log("inspeccionar matricula")}>
                <Text>{data.text}</Text>
            </Container >
        </>
    )
}

const Container = styled.div`
    width: 48%;
    background-color: #D9D9D9;
    border-radius: 10px;
    display: flex;
    align-items: center;
    cursor:pointer;
`

const Text = styled.p`
    text-align: center;
    margin: 0;
    width: 50%;
    font-size: 24px;
    padding: 5%;
`