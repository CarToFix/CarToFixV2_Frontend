import React from 'react';
import styled from 'styled-components';


const Settings = () => {
    return(
        <Settings_Container>
            <Box1>
                <h3>X</h3>
            </Box1>
            <Box2>
                <h3>Configuración del taller</h3>
                <h3>Gestion de usuarios</h3>
                <h3>Contactanos</h3>
            </Box2>
            <Box3>
                <h2>Cerrar Sesión</h2>
            </Box3>
        </Settings_Container>
    )
};

export default Settings;

const Settings_Container = styled.div`
    display: flex;
    flex-direction: column; /* Alinea los elementos en una columna (verticalmente) */
    justify-content: center; /* Centra verticalmente los elementos dentro del contenedor */
    align-items: center;     /* Centra horizontalmente los elementos dentro del contenedor */

    height: 100%;
    width: 20vw;
    min-width: 20vw;
    background-color: #ffffff;
    border: 3px solid #2C518D;
    border-radius: 10px;
    position: fixed; /* Posiciona el modal arriba del resto de elementos */
    z-index: 1000; /* Mantiene el modal sobre cualquier elemento */ 
    left: 0;
`

const Box1 = styled.div`
    height: 10vh;
    width: 100%;
    background-color: pink;
`

const Box2 = styled.div`
    display: flex;
    flex-direction: column; /* Alinea los elementos en columna */
    justify-content: center; /* Centra verticalmente los elementos */
    align-items: center; /* Centra horizontalmente los elementos */
    height: 80vh; /* Ocupa el espacio restante debajo de la barra */
    width: 100%; /* Ocupa todo el ancho disponible */
   
    background-color: #ffffff;
    color: #2C518D;
`

const Box3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 10vh;
    width: 100%;
    background: linear-gradient(70deg, #23406D, #335FA6);
    color: white;
    padding-bottom: 0px;
`