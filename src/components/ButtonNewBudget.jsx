import React from "react";
import styled from "styled-components";
import { IoIosAdd } from "react-icons/io";
import TextOfCursor from "./TextOfCurse";

const ButtonContainer = styled.div `
width: 20%;
height: 16%;
position: fixed;
bottom: 0;
right: 0;
`
const BudgetButton = styled.div `
position: absolute;
right: 2vh;
bottom: 2vh;
width: 4vw;
height: 4vw;
background-color: #E67E22;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 1300px) {
	width: 6vw;
	height: 6vw;
}
`
const Icon = styled(IoIosAdd)`
color: #ffffff;
font-size: 6vw;
`

export default function NewBudgetButton() {
	return (
			<ButtonContainer >
					<TextOfCursor text='Nuevo presupuesto'>
							<BudgetButton>
									<Icon icon={IoIosAdd}/>
							</BudgetButton>
					</TextOfCursor>
			</ButtonContainer>
	)
}