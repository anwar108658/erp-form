import logo from '../assets/logo.png'
import login from '../assets/login5.png'
import '../App.css'
import {Box, Button, InputAdornment, TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {AccountCircle, Lock, LockOpenSharp } from '@mui/icons-material';

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='w-full max-h-[89vh] h-[89vh]  max-w-280 flex bg-gray-200  shadow-2xl text-gray-700'>
            <div className='animate__animated animate__fadeInLeft flex-4 flex flex-col'>
                <figure className='p-2 bg-blue-950'>
                    <img draggable='false' className='w-[50%]' src={logo} alt="" />
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
            <figure className='animate__animated animate__fadeInDown flex-5  w-full h-full'>
                <img draggable='true' className='w-full h-full brightness-70  contrast-120' src={login} alt="" />
            </figure>
        </div>
    </div>
  )
}

export default Login
