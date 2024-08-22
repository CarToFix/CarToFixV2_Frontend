import React from 'react';
import './App.css';
// import MenuUsuarios from './views/menu_usuarios';
import CrearModificarEmpleado from './views/crear_modificar_empleado';


function App() {
  return (
    <div className="App">
      <header >
        <h1>home</h1>
      </header>
      <CrearModificarEmpleado/>
      {/* <MenuUsuarios /> */}
    </div>
  );
}

export default App;
