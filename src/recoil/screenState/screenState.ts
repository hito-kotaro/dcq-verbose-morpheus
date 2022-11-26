import { atom } from 'recoil'
import { recoilKeyHashSet } from '../recoilKeys'
import { screenKeys } from './screenKeys'

export const screenState = atom<screenKeys>({
  key: recoilKeyHashSet.SCREEN,
  default: 'DASHBOARD',
})
