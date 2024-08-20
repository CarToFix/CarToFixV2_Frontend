import React from 'react';
import styled from "styled-components";
import { CloseOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from "antd";
import ProfileIcon from '../components/menu_usuarios/profile_icon';
import UserProfileIcon from '../components/menu_usuarios/user_profile_icon';

let userGiven = { name: "El Jefe" };
let employersGiven = [
  { name: "Carlos Perex" },
  { name: "Pablo Rodriguez" },
  { name: "Fernando Silva" },
  { name: "Ruben Aoprhamian" },
  { name: "Silvia Perez" },
  { name: "Alberto Olmedo" },
];

export default function MenuUsuarios({ user = userGiven, employers = employersGiven }) {

  return (
    <>
      <Header>
        <CloseOutlined style={{ margin: '1em' }} />
      </Header>
      <main>
        <section style={{ display: 'flex', justifyContent: 'end', margin: '3vh 20vw' }}>
          <form>
            <label htmlFor="searchUser"></label>
            <input type='text' name='searchUser' placeholder='Buscar' style={{ backgroundColor: 'lightgray', border: 'solid 0.2px gray', borderRadius: '12px', padding: '7px 2px' }}></input>
            <Button shape="circle" icon={<SearchOutlined />} style={{ backgroundColor: '#335FA6', color: 'white', marginLeft: '-20px', fontSize: '15px' }} />
          </form>
        </section>
        <Board> 

          <UserProfileIcon user={user.name} />
          {employers.map((e) => {
            return <ProfileIcon name={e.name} />
          })}
        </Board>
        <section style={{ display: 'flex', justifyContent: 'end', padding: '20px 50px' }}>
          <PlusOutlined style={{ fontSize: '60px', color: 'white', background: '#E67E22', borderRadius: '50%', padding: '8px' }} />
        </section>
      </main>
    </>
  );
}

const Header = styled.div`
  background-image: linear-gradient(to right, #335FA6, #23406D);
  height: 10vh;
  width: 100%;
  display: flex;
  font-size: x-large;
  color: white;
  flex-direction: row;
  justify-content: end;
`;

const Board = styled.div`
margin: 0 20vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;

`;