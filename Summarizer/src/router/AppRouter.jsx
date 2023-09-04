import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};
