import { atom } from 'recoil'
import { recoilKeyHashSet } from '../recoilKeys'

export type userInfo = {
  id: number
  name: string
  admin: boolean
}

export const userInfoState = atom<null | userInfo>({
  key: recoilKeyHashSet.USER,
  default: null,
})
