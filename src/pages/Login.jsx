import img from '../assets/login.jpg'
import logo from '../assets/logo.png'
import '../App.css'
import {Button, TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className='w-full flex h-screen bg-gray-800'>
        <div className='slideOutDown flex m-auto max-w-180 rounded-md bg-gray-200 p-3'>
            <div className='flex-3'>
                <img src={img} className='rounded-md'/>
            </div>
            <div className='flex-2 flex items-center flex-col p-2'>
                <img src={logo} className='w-35 mb-3' />
                <div className='w-full h-full flex flex-col  gap-4'>
                    <TextField size='small' variant='outlined' className='w-full' label='User Name' />
                    <TextField size='small' variant='outlined' className='w-full' label='Password' />
                    <Button color='info' onClick={() => navigate('/form')} variant='contained'>Login</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
