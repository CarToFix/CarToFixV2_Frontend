import React from 'react';
import './App.css';
// import MenuUsuarios from './views/menu_usuarios';
import CrearModificarEempleado from './views/crear_modificar_empleado';


function App() {
  return (
    <div className="App">
      <header >
        <h1>home</h1>
      </header>
      <CrearModificarEempleado/>
      {/* <MenuUsuarios /> */}
    </div>
  );
}

export default App;
