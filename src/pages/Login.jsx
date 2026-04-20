import logo from '../assets/logo.png'
import login from '../assets/login6.webp'
import '../App.css'
import {Box, Button, InputAdornment, TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {AccountCircle, Lock, LockOpenSharp } from '@mui/icons-material';

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='w-full max-h-[80vh] h-[80vh]  max-w-280 flex shadow-lg  text-gray-700'>
            <div className='animate__animated animate__fadeInLeft curved-box flex-4 flex flex-col'>
                <figure className='p-2 bg-blue-950'>
                    <img draggable='false' className='w-[50%]' src={logo} alt="" />
                </figure>
                <Box className='bg-white flex flex-col justify-center gap-5 px-5 flex-1'>
                    <h1 className='text-2xl font-bold'>System Access</h1>
                    <Box className='flex '>
                        <TextField fullWidth id="filled-basic" className='bg-transparent!' label="Password"
                        slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle color='primary' />
                            </InputAdornment>
                            ),
                        },
                        }}
                        variant="filled"/>
                    </Box>
                    <Box className='flex '>
                        <TextField fullWidth id="filled-basic" className='bg-transparent!' label="Password"
                        slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start">
                                <Lock color='primary' />
                            </InputAdornment>
                            ),
                        },
                        }}
                        variant="filled"/>
                    </Box>
                    <Button variant='outlined' size='large' className='mt-5!'>Login</Button>
                </Box>
            </div>
            <figure className='animate__animated animate__fadeInDown flex-5  w-full h-full'>
                <img draggable='false' className='w-full h-full  transition-transform duration-500 ease-out hover:scale-110 contrast-120' src={login} alt="" />
            </figure>
        </div>
    </div>
  )
}

export default Login
