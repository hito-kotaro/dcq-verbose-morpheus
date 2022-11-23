import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLoginPage from './components/pages/AdminLoginPage'
import AdminPage from './components/pages/AdminPage'
import UserLoginPage from './components/pages/UserLoginPage'
import UserPage from './components/pages/UserPage'
import PrivateRoutes from './PrivateRoutes'
import useAdminState from './recoil/AdminState/useAdminState'
import useIsAuthState from './recoil/isAuthState/useIsAuthState'
import useLogin from './useLogin'

const Router = () => {
  const token = localStorage.getItem('token')
  const { validate } = useLogin()
  const { isAuth, setIsAuth } = useIsAuthState()
  const { isAdmin } = useAdminState()

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
      validate().then((auth) => {
        setIsAuth(auth)
      })
    }
  }, [])

  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={isAdmin ? <AdminPage /> : <Navigate to="/login/admin" />} />
      </Route>
      {/* tokenがあればとりあえずUserPageに飛ばす */}
      <Route path="/login/user" element={token ? <Navigate to="/user" /> : <UserLoginPage />} />
      <Route path="/login/admin" element={<AdminLoginPage />} />
      <Route path="/" element={<Navigate to="/login/user" />} />
    </Routes>
  )
}

export default Router
