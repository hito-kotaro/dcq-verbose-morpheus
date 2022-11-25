import { atom } from 'recoil'
import { recoilKeyHashSet } from '../recoilKeys'

export const screenState = atom({
  key: recoilKeyHashSet.SCREEN,
  default: 'DASHBOARD',
})
