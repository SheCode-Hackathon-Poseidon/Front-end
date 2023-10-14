import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LogIn from '../pages/authentication/login'
import HomePage from '../pages/homepage'

export default function WebRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />

      </Routes>
    </BrowserRouter>
  )
}
