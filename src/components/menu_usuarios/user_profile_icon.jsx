import React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";

const getCapitalLetters = (name) => {
    let splitedName = name.split(' ');
    let firstLetter = splitedName[0]?.charAt(0) || '';
    let secondLetter = splitedName[1]?.charAt(0) || '';

    return (firstLetter + secondLetter).toUpperCase();
};

export default function UserProfileIcon({ user }) {

    const [letters, setLetters] = useState('CF');
    useEffect(() => {
        if (user) {
            setLetters(getCapitalLetters(user));
        }
    }, [user]);

    return (
        <div>
            <ProfileIcon>
{letters}
            </ProfileIcon>
        </div>
    );
}

const ProfileIcon = styled.div`
    background-image: linear-gradient(to right,#E67E22,#F89F4F);
    height: 100px;
    width: 100px;
    margin: 1.5vw;
    border-radius: 50%;
    display: flex;
    font-weight: bold;  
    font-size: xx-large;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
