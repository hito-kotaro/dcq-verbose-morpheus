import React, { useState } from 'react'
import useToggle, { useToggleType } from '../../../generalHooks/useToggle'

export type menuItemType = {
  label: string
  action: () => void
}

export type useStyledMenuType = {
  anchorEl: null | HTMLElement
  toggle: useToggleType
  // eslint-disable-next-line no-unused-vars
  handleMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
}

const useStyledMenu = () => {
  const toggle = useToggle()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    console.log('handleMenuOpen')
    toggle.toggle()
    setAnchorEl(event.currentTarget)
  }

  return { anchorEl, handleMenuOpen, toggle }
}

export default useStyledMenu
