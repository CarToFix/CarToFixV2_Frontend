import React, {useState} from "react";
import styled from "styled-components";

// Estilos para el div que sigue al cursor cuando está sobre el elemento
const DivCursor = styled.div`
font-family: "inter", sans-serif;
background-color: #E67E22;
color: white;
padding: 5px;
position: absolute;
z-index: 10;
right: 3vh;
font-size: 14px;
white-space: nowrap;

&:after {
content: '';
position: absolute;
top: 100%;
right: 0px;
transform: translateX(-50%);
border-width: 8px;
border-style: solid;
border-color: #e67e22 transparent transparent transparent;
}
`

export default function TextOfCursor({text, children}) {
// Estado para controlar si el cursor está sobre el elemento
const [above, setabove] = useState(false);

return (
  // Cuando el mouse entra en el área, muestra el tooltip; cuando sale, lo oculta
  <div onMouseEnter={() => setabove(true)}
  onMouseLeave={() => setabove(false)}>
    {children}
    {above && <DivCursor>{text}</DivCursor>}
  </div>
  )
}