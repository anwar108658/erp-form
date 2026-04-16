import img from '../assets/logo.png'
import logo from '../assets/tech.jpg'
import '../App.css'
import {Box, Button, InputAdornment, TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {AccountCircle, Lock, LockOpenSharp } from '@mui/icons-material';

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='w-full h-[80vh] max-w-280 grid grid-cols-12 shadow-2xl bg-gra-100 text-gray-700'>
            <div className='animate__animated animate__fadeInLeft col-span-5 flex flex-col'>
                <figure className='p-2 bg-blue-950'>
                    <img draggable='false' className='w-[50%]' src={img} alt="" />
                </figure>
                <Box className='bg-gray-100 flex flex-col justify-center gap-5 px-5 flex-1'>
                    <h1 className='text-2xl font-bold'>System Access</h1>
                    <Box className='flex items-center gap-2'>
                        <AccountCircle />
                        <TextField fullWidth id="filled-basic" label="Password" variant="filled"/>
                    </Box>
                    <Box className='flex items-center gap-2'>
                        <Lock/>
                        <TextField fullWidth id="filled-basic" label="Password" variant="filled"/>
                    </Box>
                    <Button variant='outlined' size='large' className='mt-5!'>Login</Button>
                </Box>
            </div>
            <figure className='animate__animated animate__fadeInDown col-span-7'>
                <img draggable='false' className='h-full w-full brightness-70  contrast-120' src={logo} alt="" />
            </figure>
        </div>
    </div>
  )
}

export default Login
