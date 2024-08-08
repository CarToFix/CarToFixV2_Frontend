import logo from './logo.svg';
import './App.css';
import { NewBudget } from './views/newBudget';
import styled from 'styled-components';

function App() {
  return (
    <>
      <Header>
        <h1>header</h1>
      </Header>
      <NewBudget />
    </>
  );
}

const Header = styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
`

export default App;
