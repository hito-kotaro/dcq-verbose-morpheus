import { useRecoilState } from 'recoil'
import { authState } from './authState'

const useAuthState = () => {
  const [isAuth, setIsAuth] = useRecoilState(authState)
  return { isAuth, setIsAuth }
}

export default useAuthState
