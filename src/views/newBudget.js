import React from "react";
import styled from "styled-components";
import { NewBudgetForm } from "../components/NewBudget/newBudgetForm";
import { SearchPlate } from "../components/NewBudget/searchPlate";
import { ActionButton } from "../components/NewBudget/actionButton";
import { ServiceList } from "../components/NewBudget/serviceList";
import { ConfirmationButtons } from "../components/NewBudget/confirmationButtons";

export const NewBudget = () => {
    return (
        <CenterContainer>
            <ContentContainer>
                <div style={{ display: "flex", height: "100%", width: "100%", justifyContent: "space-between" }}>
                    <div style={{ width: "48%" }}>
                        <h1 style={{ height: "20%", margin: "0" }}>Nuevo presupuesto</h1>
                        <NewBudgetForm />
                    </div>
                    <div style={{ width: "48%" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", height: "18%" }}>
                            <SearchPlate />
                            <ActionButton />
                        </div>
                        <div style={{ width: "78%" }}>
                            <ServiceList />
                            <ConfirmationButtons />
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </CenterContainer>
    )
}

const CenterContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`

const ContentContainer = styled.div`
    height: 67vh;
    width: 84vw;
    border: solid;
    border-color: red;
`