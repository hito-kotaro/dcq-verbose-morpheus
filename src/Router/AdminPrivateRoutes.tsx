import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAdminState from '../recoil/adminState/useAdminState'
import useAuthState from '../recoil/authState/useAuthState'
import useLogin, { authCheck } from '../Repositories/auth/useLogin'

const AdminPrivateRoutes = () => {
  const { isAuth, setIsAuth } = useAuthState()
  const { isAdmin, setIsAdmin } = useAdminState()
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

  return isAuth === true && isAdmin === true ? <Outlet /> : <Navigate to="/login/admin" />
}

export default AdminPrivateRoutes
