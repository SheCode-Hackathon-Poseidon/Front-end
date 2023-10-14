import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export default function LogIn() {
  const drawerWidth = 240;
  return (
    <Container>
        <Box
        boxShadow={3}
        sx={{ marginTop: 20, border: 2, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
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
            // onChange={(newValue) => setEmail(newValue.target.value)}
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
            // onChange={(newValue) => setPassword(newValue.target.value)}
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
            LOG IN
          </Button>
        </Box>

        <Link href="/" variant="body1" underline="hover" sx={{ m: 1, fontWeight: '700' }}>
          Forgot password?
        </Link>
        <Typography variant="body1">
          Do not have an account?{' '}
          <Link href="/signup" underline="hover" fontWeight={700}>
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Container>
  )
}
