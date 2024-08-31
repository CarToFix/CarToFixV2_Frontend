import './App.css';
import Login from './views/Login';
import Register from './views/Register';
import UpdatePassword from './views/UpdatePassword';
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Registrarse' element={<Register />} />
      <Route path='/UpdatePassword' element={<UpdatePassword />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
