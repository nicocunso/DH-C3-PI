import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Body from './Components/Body/Body';
import DetalleRecomendacion from './Components/DetalleRecomendacion/DetalleRecomendacion';
import Header from './Components/Header/Header'; 
import PanelAdmin from './Pages/AgregarProductos/panelAdmin/panelAdmin'
import AgregarProducto from './Pages/AgregarProductos/AgregarProducto';
import ActualizarProducto from './Pages/AgregarProductos/ActualizarProducto'
import CrearCuenta from './Pages/AgregarProductos/crearCuenta/CrearCuenta'
import IniciarSesion from './Pages/AgregarProductos/iniciarSesion/IniciarSesion'
import Bodito from './Components/Bodito/Bodito'
import Autenticador from './Components/Autenticador/Autenticador'

function App() {
  const [recomendacionSeleccionada, setRecomendacionSeleccionada] = useState();

  const handleCloseDetalle = () => {
    setRecomendacionSeleccionada(null);
  };

  const handleSeleccionarRecomendacion = (recomendacion) => {
    setRecomendacionSeleccionada(recomendacion);
  };

  return (
    <>
      <Header acceder = {false} />
      <Routes>
        <Route path="/" element={<Body handleSeleccionarRecomendacion={handleSeleccionarRecomendacion} />} />
        <Route path="/administración" element={<AgregarProducto />} />
        <Route path="/Detail/:id" element={<DetalleRecomendacion onClose={handleCloseDetalle} />} />
        <Route path='/' element={<Body/>}/>
        <Route path='/inicio' element = {<Bodito/>}></Route>
        <Route path='/crearCuenta' element= {<CrearCuenta/>}></Route>
        <Route path='/iniciarSesion' element= {<IniciarSesion/>}></Route>
        <Route path='/admin/iniciarSesion' element= {<IniciarSesion/>}></Route>
        <Route path='/admin' element={
          <Autenticador>
            <PanelAdmin/>
          </Autenticador>
        }/>
        <Route path='/admin/agregarProductos' element={
          <Autenticador>
            <AgregarProducto/>
          </Autenticador>
        }/>
        <Route path='/admin/actualizarProductos/:id' element={
          <Autenticador>
            <ActualizarProducto/>
          </Autenticador>
        }/>
      </Routes>
    </>
  );
}

export default App;
