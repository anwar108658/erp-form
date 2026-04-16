import img from '../assets/logo.png'
import logo from '../assets/tech.jpg'
import '../App.css'
import {Button, TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='animate__animated animate__bounceInLeft w-full h-[80vh] max-w-280 grid grid-cols-12 bg-gray-100 '>
            <div className='col-span-5'>
                <figure className='p-2 bg-blue-950'>
                    <img draggable='false' className='w-[50%]' src={img} alt="" />
                </figure>
                <div>

                </div>
            </div>
            <figure className='col-span-7'>
                <img draggable='false' className='h-full w-full brightness-70  contrast-120' src={logo} alt="" />
            </figure>
        </div>
    </div>
  )
}

export default Login
