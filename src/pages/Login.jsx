import logo from '../assets/logo.png'
import login from '../assets/fbr.png'
import '../App.css'
import {Avatar, Box, Button, InputAdornment, TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {AccountCircle, Lock, LockOpenSharp, LoginRounded, Person } from '@mui/icons-material';

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className='h-screen flex items-center justify-center overflow-hidden p-5'>
        <div className='w-full md:h-[70vh] max-w-280 flex flex-col justify-between md:flex-row curved-box  text-gray-700'>
            <div className='animate__animated animate__fadeInLeft md:max-w-120 w-full md:shadow-lg flex flex-col'>
                <figure className='p-2 bg-green-200'>
                    <img draggable='false' className='w-[30%]' src={logo} alt="" />
                </figure>
                <Box className='flex flex-col justify-center gap-3 px-5 flex-1'>
                    <div className='w-full! flex items-center justify-center'>
                        <Avatar sizes='large' className='p-3! w-25! h-25! mt-3'>
                            <Person className='text-6xl!'/>
                        </Avatar>
                    </div>
                    <Box className='flex '>
                        <TextField fullWidth id="filled-basic"  label="User Name"
                        slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle color='primary' />
                            </InputAdornment>
                            ),
                        },
                        }}
                        variant="outlined"/>
                    </Box>
                    <Box className='flex '> 
                        <TextField fullWidth id="filled-basic" label="Password"
                        slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start">
                                <Lock color='primary' />
                            </InputAdornment>
                            ),
                        },
                        }}
                        variant="outlined"/>
                    </Box>
                    <Box className="flex justify-center">
                        <Button variant='outlined' size='medium' className='mt-5!' endIcon={<LoginRounded/>}>Login</Button>
                    </Box>
                </Box>
            </div>
            <div className='hidden md:block p-1 border-r-2 border-green-300 border-dotted my-10'></div>
            <figure className='animate__animated animate__fadeInDown w-full md:max-w-100 flex items-center justify-center'>
                <img draggable='false' className='transition-transform duration-500  ease-out bg-transparent max-w-50 md:max-w-full md:hover:scale-110 contrast-120' src={login} alt="" />
            </figure>
        </div>
    </div>
  )
}

export default Login
