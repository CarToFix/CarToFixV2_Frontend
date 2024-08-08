import React from "react";
import { Button, Select, Input, InputNumber } from "antd";
import styled from "styled-components";

const { TextArea } = Input;

export const NewBudgetForm = () => {
    return (
        <>
            <Container>
                <Section>
                    <Title>Titulo</Title>
                    <Select
                        defaultValue="service"
                        style={{ width: "65%" }}
                        // onChange={handleChange}
                        options={[
                            { value: 'service', label: 'Servicio' },
                            { value: 'work', label: 'Trabajo' },
                        ]}
                    />
                </Section>

                <Section>
                    <Title>Trabajo</Title>
                    <Select
                        defaultValue="service"
                        style={{ width: "65%" }}
                        // onChange={handleChange}
                        options={[
                            { value: 'service', label: 'Servicio' },
                            { value: 'work', label: 'Trabajo' },
                        ]}
                    />
                </Section>

                <Section>
                    <Title>Aignado a</Title>
                    <Select
                        defaultValue="service"
                        style={{ width: "65%" }}
                        // onChange={handleChange}
                        options={[
                            { value: 'service', label: 'Servicio' },
                            { value: 'work', label: 'Trabajo' },
                        ]}
                    />
                </Section>

                <Section>
                    <Title>Repuestos</Title>
                    <Select
                        defaultValue="service"
                        style={{ width: "65%" }}
                        // onChange={handleChange}
                        options={[
                            { value: 'service', label: 'Servicio' },
                            { value: 'work', label: 'Trabajo' },
                        ]}
                    />
                </Section>

                <Section>
                    <Title>Descripcion</Title>
                    <TextArea
                        style={{ width: "65%" }}
                        placeholder="Descripcion"
                        autoSize={{ minRows: 3, maxRows: 3 }}
                    />
                </Section>

                <Section>
                    <Title>Precio</Title>
                    <InputNumber min={0} style={{ width: "65%" }} controls={false} defaultValue={0} />
                </Section>
                <ButtonContainer>
                    <Button style={{ borderRadius: "10px", width: "100px" }} type="primary" size="small">Agregar</Button>
                </ButtonContainer>
            </Container>
        </>
    )
}

const Container = styled.div`
    background-color: #D9D9D9;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
`

const Section = styled.div`
    display: flex;
    // align-items: center;
    justify-content: space-between;
    margin: 1% 10%;
`
const ButtonContainer = styled.div`
    width: fit-content;
    margin-left: auto;
    margin-right: 10%;
`

const Title = styled.h2`
    margin:0;
    width:50%;
`