import React, { useState } from 'react'

export type useToggleType = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  toggle: () => void
}
const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    console.log('toggle')
    setIsOpen(!isOpen)
  }
  return { isOpen, setIsOpen, toggle }
}

export default useToggle
