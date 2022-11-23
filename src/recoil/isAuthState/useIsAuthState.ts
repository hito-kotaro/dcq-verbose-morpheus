import { useRecoilState } from 'recoil'
import { authState } from './isAuthState'

const useIsAuthState = () => {
  const [isAuth, setIsAuth] = useRecoilState(authState)
  return { isAuth, setIsAuth }
}

export default useIsAuthState
