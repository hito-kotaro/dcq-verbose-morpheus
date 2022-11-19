import { useNavigate } from 'react-router-dom'

const useLogin = () => {
  const navigate = useNavigate()
  const userLogin = () => {
    navigate('/user')
  }

  const adminLogin = () => {
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
