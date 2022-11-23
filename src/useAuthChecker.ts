import { useEffect } from 'react'
import useIsAuthState from './recoil/isAuthState/useIsAuthState'
import useLogin from './useLogin'

const useAuthChecker = () => {
  const { validate } = useLogin()
  const { setIsAuth } = useIsAuthState()

  useEffect(() => {
    console.log('check')
    validate().then((auth) => {
      setIsAuth(auth)
    })
  }, [])

  return {}
}

export default useAuthChecker
