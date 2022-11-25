import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAdminState from '../recoil/adminState/useAdminState'
import useAuthState from '../recoil/authState/useAuthState'
import useLogin, { authCheckType } from '../Repositories/auth/useLogin'

const AdminPrivateRoutes = () => {
  const { isAuth, setIsAuth } = useAuthState()
  const { setIsAdmin } = useAdminState()
  const { validate } = useLogin()

  useEffect(() => {
    validate().then((res: authCheckType) => {
      setIsAuth(res.auth)
      setIsAdmin(res.admin)
    })
  }, [])

  // nullなら先にreturn
  if (isAuth === null) {
    return null
  }

  // true/false
  return isAuth ? <Outlet /> : <Navigate to="/login/admin" />
}

export default AdminPrivateRoutes
