import { useRecoilState } from 'recoil'
import { adminState } from './adminState'

const useAdminState = () => {
  const [isAdmin, setIsAdmin] = useRecoilState(adminState)
  return { isAdmin, setIsAdmin }
}

export default useAdminState
