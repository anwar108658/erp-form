import img from '../assets/login.jpg'
import logo from '../assets/tech.jpg'
import '../App.css'
import {Button, TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='slideOutDown w-full h-[80vh] max-w-280 grid grid-cols-12 bg-gray-100 '>
            <div className='col-span-5'>
                d
            </div>
            <figure className='col-span-7'>
                <img className='h-full w-full brightness-90  contrast-120' src={logo} alt="" />
            </figure>
        </div>
    </div>
  )
}

export default Login
