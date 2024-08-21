import React from "react";
import styled from "styled-components";
import IconsDashboard from "../assets/Icons/icons_dashboard.svg"

const DivSvg = styled.div`
position: relative;
width: 100%;
height: 100%;
`
const ImageSVG = styled.img`
position: absolute;
top: 20px;
left: 50%;    //Centra de forma horizontal
transform: translateX(-50%); //Centra de forma horizontal
width: 75%;
`
const TextInformation = styled.h3`
position: absolute;
bottom: 20px;
left: 50%;
transform: translateX(-50%);
width: 50%;
font-size: 20px;
margin: 0;
text-align: center;
color: #2C518D;
font-family: "Inter", sans-serif;
`
const Number = styled.h3 `
position: absolute;
bottom: 33%;
left: 50%;
transform: translateX(-50%);
width: 50%;
font-size: 45px;
margin: 0;
text-align: center;
color: #2C518D;
font-family: "Inter", sans-serif;
`
export default function AddictionalData({title, level}) {
    return (
        <DivSvg>
            <ImageSVG src={IconsDashboard} alt="IconsDashboard"/>
            <Number>{level}</Number>
        <TextInformation>{title}</TextInformation>
    </DivSvg>
    )
}