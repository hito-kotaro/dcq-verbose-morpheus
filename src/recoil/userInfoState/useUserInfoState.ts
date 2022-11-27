import { useRecoilState } from 'recoil'
import { userInfoState } from './userInfoState'

const useUserInfoState = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  return { userInfo, setUserInfo }
}

export default useUserInfoState
