import { useEffect } from 'react'
import useAuthState from './recoil/authState/useAuthState'
import useLogin from './useLogin'

const useAuthChecker = () => {
  const { validate } = useLogin()
  const { setIsAuth } = useAuthState()

  useEffect(() => {
    console.log('check')
    validate().then((auth) => {
      setIsAuth(auth)
    })
  }, [])

  return {}
}

export default useAuthChecker
