import React from 'react'
import Login from './pages/Login'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Form from './pages/Form';
import Dashboard from './pages/Dashboard';
import Portal from "./pages/Portal";

const App = () => {
  return (
    <div className='w-full h-screen bg-gry-800'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/form' element={<Form />}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/portal' element={<Portal/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
