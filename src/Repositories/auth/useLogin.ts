import { AxiosResponse } from 'axios'
import { useCallback } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import useAdminState from '../../recoil/adminState/useAdminState'
import useAuthState from '../../recoil/authState/useAuthState'
import useUserInfoState from '../../recoil/userInfoState/useUserInfoState'
import { create } from '../Repository'

export type authCheckType = {
  auth: boolean
  admin: boolean
}

const useLogin = () => {
  const navigate = useNavigate()
  const { isAdmin, setIsAdmin } = useAdminState()
  const { isAuth, setIsAuth } = useAuthState()
  const { setUserInfo } = useUserInfoState()

  const errorHandler = (code: number) => {
    if (code === 500) {
      toast.error('サーバエラーです。')
    } else if (code === 404) {
      toast.error('ユーザが存在しません')
    } else if (code === 401) {
      toast.error('認証に失敗しました')
    }
  }

  const clearStorage = () => {
    localStorage.removeItem('token')
  }

  const logout = () => {
    clearStorage()
    setIsAuth(null)
    setIsAdmin(null)
    setUserInfo(null)
    navigate('/login/user')
  }

  const validate = useCallback(async () => {
    const instance = create()
    try {
      const result: AxiosResponse = await instance.get('/auth')

      return result.data
    } catch (e: any) {
      clearStorage()
      return { auth: false, admin: false }
    }
  }, [isAdmin, isAuth])

  const userLogin = async (user: string, pwd: string) => {
    const instance = create()
    try {
      const result: AxiosResponse = await instance.post('/auth/user', { name: user, password: pwd })
      localStorage.setItem('token', String(result.data.token))
      const res = result.data
      setUserInfo({ id: res.id, name: res.name, admin: res.admin })
      navigate('/user')
    } catch (e: any) {
      errorHandler(Number(e.response.status))
    }
  }

  const adminLogin = async (user: string, pwd: string) => {
    const instance = create()
    try {
      const result: AxiosResponse = await instance.post('/auth/admin', { name: user, password: pwd })
      localStorage.setItem('token', String(result.data.token))
      navigate('/admin')
    } catch (e: any) {
      errorHandler(Number(e.response.status))
    }
  }

  const toAdminLoginPage = () => {
    navigate('/login/admin')
  }

  const toUserLoginPage = () => {
    navigate('/login/user')
  }

  return { userLogin, adminLogin, toAdminLoginPage, toUserLoginPage, logout, clearStorage, validate }
}

export default useLogin
