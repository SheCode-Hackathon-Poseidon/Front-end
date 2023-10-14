import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './pages/authentication/login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
