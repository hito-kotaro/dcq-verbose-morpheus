import { useState } from 'react'

const usePasswordForm = () => {
  const [isShow, setIsShow] = useState(false)
  const toggle = () => {
    setIsShow(!isShow)
  }
  return { isShow, toggle }
}

export default usePasswordForm
