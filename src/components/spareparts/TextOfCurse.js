import React, { useState } from "react";
import styled from "styled-components";

const DivCursor = styled.div`
font-family: "inter", sans-serif;
background-color: #2C518D;
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
border-color: #2C518D transparent transparent transparent;
}
`

export default function TextOfCursor({ text, children }) {

  const [above, setabove] = useState(false);

  return (
    <div onMouseEnter={() => setabove(true)}
      onMouseLeave={() => setabove(false)}>
      {children}
      {above && <DivCursor>{text}</DivCursor>}
    </div>
  )
}