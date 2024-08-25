import React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";
import { CloseOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from "antd";
import ProfileIcon from '../components/menu_usuarios/profile_icon';
import UserProfileIcon from '../components/menu_usuarios/user_profile_icon';
import userInfo from './user_and_employees.json';




export default function MenuUsuarios() {

  const [fetchedData, setFetchedData] = useState({})

  useEffect(() => {
    if (userInfo) {
      setFetchedData(userInfo)
    }
  }, [])

  console.log('Employees info: ', fetchedData);

  return (
    <>
      <Header>
        <CloseOutlined style={{ margin: '1em' }} />
      </Header>
      <main>
        <section style={{ display: 'flex', justifyContent: 'end', width: '74vw', margin: '5em 0 2em 0' }}>
          <form>
            <label htmlFor="searchUser"></label>
            <input type='text' value={'buscar'} name='searchUser' style={{ backgroundColor: '#ECEDED', border: 'none', borderRadius: '12px', padding: '7px 5px 7px 4px', boxShadow: '0 0.1em 0.2em rgb(0 0 0 / 60%)' }}></input>
            <Button shape="circle" icon={<SearchOutlined />} style={{ backgroundColor: '#335FA6', color: 'white', marginLeft: '-20px', fontSize: '15px', top: '2px',  boxShadow: '0 0.1em 0.2em rgb(0 0 0 / 60%)'

             }} />
          </form>
        </section>
        <Board>
          {fetchedData.user && <UserProfileIcon user={fetchedData.user.name} />}
          {fetchedData.empployees && fetchedData.empployees.map((e) => (
            <ProfileIcon key={e.id} name={e.name} />
          ))}
        </Board>
        <section style={{ display: 'flex', justifyContent: 'end', padding: '20px 50px' }}>
          <PlusOutlined style={{ fontSize: '35px', color: 'white', background: '#E67E22', borderRadius: '50%', padding: '8px' }} />
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
`

const Board = styled.div`
margin: 0 20vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;

`
