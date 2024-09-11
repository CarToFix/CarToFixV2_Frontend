import React from 'react';
import styled from 'styled-components';


const Settings = () => {
    return(
        <Settings_Container>
            <h3>Configuración del taller</h3>
            <h3>Gestion de usuarios</h3>
            <h3>Contactanos</h3>
        </Settings_Container>
    )
};

export default Settings;

const Settings_Container = styled.div`
    justify-content: center; /* Centra horizontalmente */
    align-items: center;     /* Centra verticalmente */
    height: 100%;
    width: 20vw;
    background-color: #ffffff;
    border: 2px solid #2C518D;
    border-radius: 10px;
    position: fixed;
    z-index: 1000;
    left: 0;

`