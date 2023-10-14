import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import userStore from '../../stores/user'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import {login} from '../../api/auth'

export default function LogIn() {
    const navigate = useNavigate()
    const { setDataUser } = userStore()

    const [Email, setEmail] = React.useState('')
    const [Password, setPassword] = React.useState('')

    const handleSubmit = async () => {
        // const res = await login({ email: Email, password: Password })
       
        // if (res?.data?.message === 'Email is required!' || res?.data?.message === 'Password is required!') {
        // toast.error('Email or Password is empty!')
        // } else if (res?.data?.message === 'User not found!') {
        // toast.error('User is not exists!')
        // } else if (res?.data?.message === 'Incorrect password!') {
        // toast.error('Incorrect password!')
        // } else if (res?.data?.message === 'Login successfully!') {
        setDataUser({user:"Minh", token:"123"})
        navigate('/')
        toast.success('Login successfully!')
        // } else {
        // toast.error('There is an error!')
        // }
    }

  return (
    <Container>
        <Box
        boxShadow={2}
        sx={{ marginTop: 12, border: 1, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography component="h1" variant="h3" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
          Log In
        </Typography>

        <Box sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            size="small"
            onChange={(newValue) => setEmail(newValue.target.value)}
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            size="small"
            onChange={(newValue) => setPassword(newValue.target.value)}
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }} onClick={handleSubmit}>
            LOG IN
          </Button>
        </Box>

        <Link href="/" variant="body1" underline="hover" sx={{ m: 1, fontWeight: '700' }}>
          Forgot password?
        </Link>
      
      </Box>
    </Container>
  )
}
