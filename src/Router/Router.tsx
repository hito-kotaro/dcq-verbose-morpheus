import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminPrivateRoutes from './AdminPrivateRoutes'
import AdminLoginPage from '../components/pages/AdminLoginPage'
import AdminPage from '../components/pages/AdminPage'
import UserLoginPage from '../components/pages/UserLoginPage'
import UserPage from '../components/pages/UserPage'
import useAdminState from '../recoil/adminState/useAdminState'
import useAuthState from '../recoil/authState/useAuthState'
import useLogin, { authCheck } from '../useLogin'
import UserPrivateRoutes from './UserPrivateRoutes'

const Router = () => {
  const token = localStorage.getItem('token')
  const { validate } = useLogin()
  const { setIsAuth } = useAuthState()
  const { setIsAdmin } = useAdminState()

  // /userに直接アクセスしたときに認証のパターン
  // ■ tokenありの場合
  //  - APIで検証
  //   ■ 認証されなかった場合
  //     - tokenを削除してログイン画面に戻る => OK
  //   ■ 認証された場合
  //     - tokenを保持したままログイン後ページに遷移 => OK
  // ■ tokenなしの場合
  //   - /login/usesrにリダイレクト => OK

  // /login/userにアクセスしたときのパターン
  // ■ tokenありの場合
  //  - PrivateRouteに飛ばしてtokenを検証
  //   ■ 認証されなかった場合
  //     - tokenを削除してログイン画面に戻る => OK
  //   ■ 認証された場合
  //     - tokenを保持したまUser画面を表示
  // ■ tokenなしの場合
  //   - そのままLogin画面を表示 =>

  useEffect(() => {
    if (token) {
      validate().then((res: authCheck) => {
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
    </Routes>
  )
}

export default Router
