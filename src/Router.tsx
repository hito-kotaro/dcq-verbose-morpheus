import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminLoginPage from './components/pages/AdminLoginPage'
import AdminPage from './components/pages/AdminPage'
import UserLoginPage from './components/pages/UserLoginPage'
import UserPage from './components/pages/UserPage'

const Router = () => {
  return (
    <Routes>
      <Route path="/login/user" element={<UserLoginPage />} />
      <Route path="/login/admin" element={<AdminLoginPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/" element={<UserLoginPage />} />
    </Routes>
  )
}

export default Router
