import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminPrivateRoutes from './AdminPrivateRoutes'
import AdminLoginPage from '../components/pages/AdminLoginPage'
import AdminPage from '../components/pages/AdminPage'
import UserLoginPage from '../components/pages/UserLoginPage'
import UserPage from '../components/pages/UserPage'
import useAdminState from '../recoil/adminState/useAdminState'
import useAuthState from '../recoil/authState/useAuthState'
import useLogin, { authCheckType } from '../Repositories/auth/useLogin'
import UserPrivateRoutes from './UserPrivateRoutes'

const Router = () => {
  const token = localStorage.getItem('token')
  const { validate } = useLogin()
  const { setIsAuth } = useAuthState()
  const { setIsAdmin } = useAdminState()

  // /userに直接アクセスしたときに認証のパターン
  // ■ tokenがlocalStorageにある場合
  //  - バックエンドで検証
  //   ■ 認証されなかった場合
  //     - tokenを削除してログイン画面に戻る => OK
  //   ■ 認証された場合
  //     - tokenを保持したままログイン後のページに遷移 => OK
  // ■ tokenなしの場合
  //   - /login/usesrにリダイレクト => OK

  useEffect(() => {
    if (token) {
      validate().then((res: authCheckType) => {
        setIsAuth(res.auth)
        setIsAdmin(res.admin)
      })
    }
  }, [])

  return (
    <Routes>
      <Route element={<UserPrivateRoutes />}>
        <Route path="/user" element={<UserPage />} />
      </Route>

      <Route element={<AdminPrivateRoutes />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      <Route path="/login/user" element={token ? <Navigate to="/user" /> : <UserLoginPage />} />
      <Route path="/login/admin" element={token ? <Navigate to="/admin" /> : <AdminLoginPage />} />
      <Route path="/" element={<Navigate to="/login/user" />} />
    </Routes>
  )
}

export default Router
