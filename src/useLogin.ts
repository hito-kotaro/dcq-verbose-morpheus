import { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import useAdminState from './recoil/AdminState/useAdminState'
import { create } from './Repositories/Repository'

const useLogin = () => {
  const navigate = useNavigate()
  const { setIsAdmin } = useAdminState()

  const errorHandler = (code: number) => {
    if (code === 500) {
      toast.error('サーバエラーです。')
    } else if (code === 404) {
      toast.error('ユーザが存在しません')
    } else if (code === 401) {
      toast.error('認証に失敗しました')
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  const userLogin = async (user: string, pwd: string) => {
    const instance = create()
    try {
      const result: AxiosResponse = await instance.post('/auth/user', { name: user, password: pwd })
      localStorage.setItem('token', String(result.data.token))
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
      setIsAdmin(true)
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

  return { userLogin, adminLogin, toAdminLoginPage, toUserLoginPage, logout }
}

export default useLogin
