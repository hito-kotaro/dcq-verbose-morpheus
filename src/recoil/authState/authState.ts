import { atom } from 'recoil'
import { recoilKeyHashSet } from '../recoilKeys'

export const authState = atom<boolean | null>({
  key: recoilKeyHashSet.IS_AUTH,
  default: null,
})
