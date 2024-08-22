import React from 'react'
import styled from "styled-components";
import { CloseOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

let actualUser = {
    nombre: "Raul Valdez"
}

let actualPin = {
    number: 2155
}

let permisos = [
    {
        nombre: "Todos los permisos",
        permitido: false,
    },
    {
        nombre: "Permiso 1",
        permitido: true,
    },
    {
        nombre: "Permiso 1",
        permitido: false,
    },
    {
        nombre: "Permiso 1",
        permitido: true,
    }
]

let especialidad = [
    { nombre: "Pintura" },
    { nombre: "Cambio de Aceite" },
    { nombre: "Chapa" },
    { nombre: "Electricidad" },
    { nombre: "Alineación" },
    { nombre: "Mecánica" }
]

export default function CrearModificarEempleado() {
    return (
        <>
            <Container>
                <Aside>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '16vw' }}>

                        <BigProfilePic>

                            <Avatar size={120} icon={<UserOutlined />} />

                        </BigProfilePic>

                        <BigButton text='Guardar' type='azul' GUARDAR />
                        <BigButton text='Eliminar' type='rojo' ELIMINAR />
                    </div>
                </Aside>
                <Main>
                    <header style={{ width: '100px', position: 'fixed', top: '20px', right: '10px' }}>
                        <CloseOutlined style={{ color: 'black' }} />
                    </header>
                    <Article>
                        <form>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <LabelNombre>
                                    <div>
                                        <h3>
                                            Nombre de Empleado
                                        </h3>
                                        <input type="text" value={actualUser.nombre} />
                                    </div>
                                </LabelNombre>
                                <LabelPin>
                                    <div>
                                        <h3>
                                            Pin
                                        </h3>
                                        <input type="text" value={actualPin.number} />
                                    </div>

                                </LabelPin>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <LabelPermisos>
                                    <div>
                                        <h3>Permisos</h3>
                                        <ul>
                                            {
                                                permisos.map((p, index) => {
                                                    return (

                                                        <li key={index}>
                                                            <input type="checkbox" id={p.nombre} name={p.nombre} />
                                                            <label htmlFor={p.nombre}>{p.nombre}</label>
                                                        </li>
                                                    )

                                                })
                                            }
                                        </ul>
                                    </div>
                                </LabelPermisos>
                                <LabelEspecialidad>
                                    <div>
                                        <h3>Especialidad</h3>
                                        <ul>
                                            {
                                                especialidad.map((e, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <input type="checkbox" id={e.nombre} name={e.nombre} />
                                                            <label htmlFor={e.nombre}>{e.nombre}</label>
                                                        </li>
                                                    )

                                                })
                                            }
                                        </ul>
                                    </div>
                                </LabelEspecialidad>

                            </div>

                        </form>
                    </Article>
                </Main>
            </Container>
        </>

    )
}

const Container = styled.div`

display: flex;
width: 100%;
flex-direction: row;



`

const Main = styled.div`
display: flex;
width: 100%;
flex-direction: column;
flex-wrap: nowrap;
align-items: center;
justify-content: center;
align-content: center;



`

const Article = styled.div`

display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: center;
justify-content: center;
align-content: center;
text-align: start;


`

const Aside = styled.div`
display: flex;
flex-direction: column;
  background-image: linear-gradient(to right, #23406D, #335FA6);
  height: 100vh;
  width: 16vw;
justify-content: center;


`
const BigProfilePic = styled.div`

  background-image: linear-gradient(to right, #335FA6, #23406D);
  border: solid 4px;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    display: flex;
    margin-bottom: 20px;
    font-weight: bold;  
    font-size: xx-large;
    color : white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

`

const BigButton = styled.div`

border: 4px solid white;
border-radius: 30px;
background-image: linear-gradient(to right, #335FA6, #23406D);
height: 5vh;
width: 10vw;
margin-bottom: 10px;


`

const LabelNombre = styled.div`
display: flex;
flex-direction: column;
border: solid 2px #335FA6;
width: 26vw;
height: 5vh;
align-items: left;
justify-content: center;
padding: 8px 20px;
border-radius: 25px;
margin: 5px;
margin-bottom: 10px;
h3 {
    padding-left: 5px;
    padding-right: 5px;
    background-color: white;
    width: fit-content;
    color: #23406D;
    margin-bottom: 5px;
}
div {
    position: relative;
    top: -16px;
    input {
        border: none;
        margin-left: 5px;
        font-size: larger;
     }
}


`

const LabelPin = styled.div`
border: solid 2px #335FA6;
width: 26vw;
height: 5vh;
padding: 8px 20px;
border-radius: 25px;
margin: 5px;
margin-bottom: 10px;
h3 {
    padding-left: 5px;
    padding-right: 5px;
    background-color: white;
    width: fit-content;
    color: #23406D;
    margin-bottom: 5px;
}
div {
    position: relative;
    top: -22px;
    input {
        border: none;
        margin-left: 5px;
        font-size: larger;
    }
}

`
const LabelPermisos = styled.div`

border: solid 2px #335FA6;
width: 26vw;
padding: 10px 20px;
border-radius: 25px;
list-style: none;
margin: 5px;
h3 {
    padding-left: 5px;
    padding-right: 5px;
    background-color: white;
    width: fit-content;
    color: #23406D;
}
div {
    position: relative;
    top: -24px;
    font-weight: 500;
}

`
const LabelEspecialidad = styled.div`

border: solid 2px #335FA6;
width: 26vw;
padding: 10px 20px;
border-radius: 25px;
list-style: none;
margin: 5px;
h3 {
    padding-left: 5px;
    padding-right: 5px;
    background-color: white;
    width: fit-content;
    color: #23406D;
}
div {
    position: relative;
    top: -22px;
    font-weight: 500;
}

`