import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAdminState from '../recoil/AdminState/useAdminState'
import useIsAuthState from '../recoil/isAuthState/useIsAuthState'
import useLogin, { authCheck } from '../useLogin'

const UserPrivateRoutes = () => {
  const { isAuth, setIsAuth } = useIsAuthState()
  const { setIsAdmin } = useAdminState()
  const token = localStorage.getItem('token')
  const { validate } = useLogin()

  useEffect(() => {
    if (token) {
      validate().then((res: authCheck) => {
        setIsAuth(res.auth)
        setIsAdmin(res.admin)
      })
    }
  }, [])

  return isAuth ? <Outlet /> : <Navigate to="/login/user" />
}

export default UserPrivateRoutes
