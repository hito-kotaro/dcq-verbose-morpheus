import { atom } from 'recoil'
import { recoilKeyHashSet } from '../recoilKeys'

export const adminState = atom<boolean | null>({
  key: recoilKeyHashSet.IS_ADMIN,
  default: null,
})
