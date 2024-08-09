import React from 'react'
import styled from "styled-components";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

export default function ProfileIcon({ name }) {
    return (
        <Container>
            <UserPrifileIcon>
                <Avatar size={90} icon={<UserOutlined />} />
            </UserPrifileIcon>
            <p>
                {name}
            </p>
        </Container>)
}

const UserPrifileIcon = styled.div`
  background-image: linear-gradient(to right, #335FA6, #23406D);
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: flex;
        margin: 1.5vw;
    font-weight: bold;  
    font-size: xx-large;
    color : white;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Container = styled.div`
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
