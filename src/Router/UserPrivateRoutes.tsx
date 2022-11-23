import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAdminState from '../recoil/adminState/useAdminState'
import useAuthState from '../recoil/authState/useAuthState'
import useLogin, { authCheck } from '../useLogin'

const UserPrivateRoutes = () => {
  const { isAuth, setIsAuth } = useAuthState()
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
