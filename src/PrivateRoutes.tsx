import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useIsAuthState from './recoil/isAuthState/useIsAuthState'
import useLogin from './useLogin'

const PrivateRoutes = () => {
  const { isAuth, setIsAuth } = useIsAuthState()
  const token = localStorage.getItem('token')
  const { validate } = useLogin()

  useEffect(() => {
    if (token) {
      validate().then((auth) => {
        setIsAuth(auth)
      })
    }
  }, [])
  return isAuth ? <Outlet /> : <Navigate to="/login/user" />
}

export default PrivateRoutes
