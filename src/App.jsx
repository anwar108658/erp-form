import React from 'react'
import Login from './pages/Login'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Form from './pages/Form';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/form' element={<Form />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
