import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAdminState from '../recoil/adminState/useAdminState'
import useAuthState from '../recoil/authState/useAuthState'
import useLogin, { authCheck } from '../Repositories/auth/useLogin'

const AdminPrivateRoutes = () => {
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

  const switchRoute = () => {
    // isAuthがnullの場合何もしない
    if (!isAuth) {
      return null
    }

    // isAuthがbooleanの場合t/fによってreturn
    if (isAuth === true) {
      return <Outlet />
    }
    return <Navigate to="/login/admin" />
  }

  return switchRoute()
}

export default AdminPrivateRoutes
