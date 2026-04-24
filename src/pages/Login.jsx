import logo from '../assets/logo.png'
import login from '../assets/fbr.png'
import '../App.css'
import {Avatar, Box, Button, InputAdornment, TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {AccountCircle, Lock, LockOpenSharp, Person } from '@mui/icons-material';

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className='h-screen flex items-center justify-center overflow-hidden p-5'>
        <div className='w-full md:h-[70vh]  max-w-280 flex flex-col justify-between md:flex-row curved-box  text-gray-700'>
            <div className='animate__animated animate__fadeInLeft md:max-w-120 w-full flex flex-col'>
                <figure className='p-2 bg-blue-950'>
                    <img draggable='false' className='w-[30%]' src={logo} alt="" />
                </figure>
                <Box className='bg-white flex flex-col justify-center gap-3 px-5 flex-1'>
                    <div className='w-full! flex items-center justify-center'>
                        <Avatar sizes='large' className='p-3! w-25! h-25! mt-3'>
                            <Person className='text-6xl!'/>
                        </Avatar>
                    </div>
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
            <div className='hidden md:block p-1 border-r-2 border-gray-300 my-10'></div>
            <figure className='animate__animated animate__fadeInDown w-full md:max-w-100 flex items-center justify-center'>
                <img draggable='false' className='transition-transform duration-500  ease-out bg-transparent max-w-50 md:max-w-full md:hover:scale-110 contrast-120' src={login} alt="" />
            </figure>
        </div>
    </div>
  )
}

export default Login
