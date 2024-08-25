import React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";
import { CloseOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import userInfo from './particular_employee.json';

export default function CrearModificarEmpleado() {

    const [fetchedData, setFetchedData] = useState({})

    useEffect(() => {
        if (userInfo) {
            setFetchedData(userInfo)
        }
    }, [])

    console.log('user info: ', fetchedData);

    return (
        <>
            {userInfo ? (
                <Container>
                    <Aside>
                        <AsideContent>
                            <BigProfilePic>
                                <Avatar size={200} icon={<UserOutlined />} />
                            </BigProfilePic>
                            <BigBlueButton>Guardar</BigBlueButton>
                            <BigRedButton>Eliminar</BigRedButton>

                        </AsideContent>
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
                                            <input type="text" value={fetchedData.nombre} />
                                        </div>
                                    </LabelNombre>
                                    <LabelPin>
                                        <div>
                                            <h3>
                                                Pin
                                            </h3>
                                            <input type="text" value={fetchedData.pin} />
                                        </div>
                                    </LabelPin>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <LabelPermisos>
                                        <div>
                                            <h3>Permisos</h3>
                                            <ul>
                                                {fetchedData.especialidad && fetchedData.especialidad.map((e, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <input type="checkbox" id={e.nombre} name={e.nombre} checked={e.capacitado} />
                                                            <label htmlFor={e.nombre}>{e.nombre}</label>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </LabelPermisos>
                                    <LabelEspecialidad>
                                        <div>
                                            <h3>Especialidad</h3>
                                            <ul>
                                                {
                                                    fetchedData.especialidad && fetchedData.especialidad.map((e, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <input type="checkbox" id={e.nombre} name={e.nombre} checked={e.capacitado} />
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
            ) : (<p>Cargando</p>)}
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
    margin-left: 5em;
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

const AsideContent = styled.div`
display: flex;
flex-direction: column;
 align-items: center;
 margin-left: 16vw;
`

const BigProfilePic = styled.div`
    background-image: linear-gradient(to right, #335FA6, #23406D);
    border: solid 4px;
    height: 200px;
    width: 200px;
    margin-top: -5em;
    border-radius: 50%;
    display: flex;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: xx-large;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BigBlueButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    border-radius: 30px;
    color: white;
    padding: 0.2em 2.5em;
    font-weight: 700;
    background-image: linear-gradient(to right, #335FA6, #23406D);
    height: 5vh;
    width: 12vw;
    margin-bottom: 15px;
    box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 60%);
`

const BigRedButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    border-radius: 30px;
    color: white;
    padding: 0.2em 2.5em;
    font-weight: 700;
    background-color: #B72D2D;
    height: 5vh;
    width: 12vw;
    margin-bottom: 15px;
    box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 60%);
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
    margin-bottom: 20px;
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
            background: none;
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
    margin-bottom: 20px;
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
            background: none;
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
        border: solid 2px #335FA6;
        border-radius: 20px;
        padding: 10px 20px;
        background-color: white;
        width: 100%;
        color: #23406D;
        margin-left: -22px;
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
        border: solid 2px #335FA6;
        border-radius: 20px;
        padding: 10px 20px;
        background-color: white;
        width: 100%;
        color: #23406D;
        margin-left: -22px;
    }
    div {
        position: relative;
        top: -24px;
        font-weight: 500;
    }
`
