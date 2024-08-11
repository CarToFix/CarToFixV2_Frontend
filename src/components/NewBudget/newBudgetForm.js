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
                    <CustomSelect
                        defaultValue="service"
                        // onChange={handleChange}
                        dropdownStyle={{ backgroundColor: "#BABABA" }}
                        options={[
                            { value: 'service', label: 'Servicio' },
                            { value: 'work', label: 'Trabajo' },
                        ]}
                    />
                </Section>

                <Section>
                    <Title>Trabajo</Title>
                    <CustomSelect
                        defaultValue="service"
                        // onChange={handleChange}
                        dropdownStyle={{ backgroundColor: "#BABABA" }}
                        options={[
                            { value: 'service', label: 'Servicio' },
                            { value: 'work', label: 'Trabajo' },
                        ]}
                    />
                </Section>

                <Section>
                    <Title>Aignado a</Title>
                    <CustomSelect
                        defaultValue="service"
                        // onChange={handleChange}
                        dropdownStyle={{ backgroundColor: "#BABABA" }}
                        options={[
                            { value: 'service', label: 'Servicio' },
                            { value: 'work', label: 'Trabajo' },
                        ]}
                    />
                </Section>

                <Section>
                    <Title>Repuestos</Title>
                    <CustomSelect
                        defaultValue="service"
                        // onChange={handleChange}
                        dropdownStyle={{ backgroundColor: "#BABABA" }}
                        dropdownRender={menu => (
                            <div style={{ backgroundColor: '#BABABA' }}>
                                {React.cloneElement(menu, {
                                    style: {
                                        ...menu.props.style,
                                        backgroundColor: '#BABABA', // Applies background to dropdown
                                    },
                                })}
                            </div>
                        )}
                        options={[
                            { value: 'service', label: 'Servicio' },
                            { value: 'work', label: 'Trabajo' },
                        ]}
                    />
                </Section>

                <Section>
                    <Title>Descripcion</Title>
                    <CustomTextArea
                        style={{ width: "65%", backgroundColor: "#BABABA" }}
                        placeholder="Descripcion"
                        autoSize={{ minRows: 3, maxRows: 3 }}
                    />
                </Section>

                <Section>
                    <Title>Precio</Title>
                    <InputNumber min={0} style={{ width: "65%", backgroundColor: "#BABABA" }} controls={false} defaultValue={0} />
                </Section>
                <ButtonContainer>
                    <Button style={{ borderRadius: "10px", width: "100px", backgroundColor: "#2C518D", color: "white" }} size="small">Agregar</Button>
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

const CustomSelect = styled(Select)`
    width: 65%;

    .ant-select-selector {
        background-color: #BABABA !important;
        color:black;
    }

    .ant-select-selector.ant-select-item-option-selected{
        background-color: #FFD700 !important;
        color: #000000 !important;
    }
`

const CustomTextArea = styled(TextArea)`
    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        background: #bababa;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #d3d3d3;
        border-radius: 10px;
        border: 2px solid #bababa;
    }
`