
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/organismos/NavBar'
import Login from './paginas/login'
import Registro from './paginas/registrarse'
import QuienSomos from './paginas/QuienSomos'
import Principal from './paginas/Principal'
import DetalleHorarios from './paginas/detalles/DetalleHora'
import HorariosGenerales from './paginas/HorariosGenerales'
import ListaTrabajadores from './paginas/Empleados'
import DetalleTrabajadores from './paginas/detalles/DetallePersona'

function App() {
  return (
    <div className='container text-center mt-5'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path='/horarios' element={<HorariosGenerales />} />
        <Route path='/horario/:tipo/:id' element={<DetalleHorarios />} />
        <Route path='/trabajadores' element={<ListaTrabajadores />} />
        <Route path='/trabajador/:id' element={<DetalleTrabajadores />} />
        <Route path='/quienessomos' element={<QuienSomos />} />
      </Routes>
    </div>
  )
}

export default App
