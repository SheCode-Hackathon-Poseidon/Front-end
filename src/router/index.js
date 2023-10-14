import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LogIn from '../page/LogIn'
export default function WebRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  )
}
