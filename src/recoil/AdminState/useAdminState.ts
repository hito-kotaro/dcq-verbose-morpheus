import { useRecoilState } from 'recoil'
import { adminState } from './AdminState'

const useAdminState = () => {
  const [isAdmin, setIsAdmin] = useRecoilState(adminState)
  return { isAdmin, setIsAdmin }
}

export default useAdminState
