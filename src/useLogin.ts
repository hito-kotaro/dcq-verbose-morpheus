import { useNavigate } from 'react-router-dom'

const useLogin = () => {
  const navigate = useNavigate()

  const userLogin = (user: string, pwd: string) => {
    console.log(user)
    console.log(pwd)
    navigate('/user')
  }

  const adminLogin = (user: string, pwd: string) => {
    console.log(user)
    console.log(pwd)
    navigate('/admin')
  }

  const toAdminLoginPage = () => {
    navigate('/login/admin')
  }

  const toUserLoginPage = () => {
    navigate('/login/user')
  }

  return { userLogin, adminLogin, toAdminLoginPage, toUserLoginPage }
}

export default useLogin
