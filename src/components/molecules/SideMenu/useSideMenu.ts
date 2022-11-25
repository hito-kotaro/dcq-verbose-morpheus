import { ReactElement } from 'react'

export type sideMenuType = {
  id: number
  label: string
  icon: ReactElement
  action: () => void
}

const useSideMenu = () => {
  return {}
}

export default useSideMenu
