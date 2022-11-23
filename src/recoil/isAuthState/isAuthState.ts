import { atom } from 'recoil'
import { recoilKeyHashSet } from '../recoilKeys'

export const authState = atom({
  key: recoilKeyHashSet.IS_AUTH,
  default: false,
})
