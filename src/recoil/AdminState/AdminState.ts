import { atom } from 'recoil'
import { recoilKeyHashSet } from '../recoilKeys'

export const adminState = atom({
  key: recoilKeyHashSet.IS_ADMIN,
  default: false,
})
