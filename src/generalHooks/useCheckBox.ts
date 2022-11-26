import { useState } from 'react'

export type useCheckBoxType = {
  isCheck: boolean
  clear: () => void
  onChange: (e: any) => void
}

const useCheckBox = (init?: boolean) => {
  const [isCheck, setIsCheck] = useState(init || false)
  const onChange = (e: any) => {
    setIsCheck(!isCheck)
  }

  const clear = () => {
    setIsCheck(false)
  }
  return { isCheck, onChange, clear }
}

export default useCheckBox
