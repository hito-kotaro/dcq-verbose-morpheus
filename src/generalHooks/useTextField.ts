import { ChangeEvent, useState } from 'react'

export type textInputHandler = {
  input: string
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  clear: () => void
}

const useTextField = (init?: string) => {
  const [input, setInput] = useState(init ?? '')

  // 入力
  // useEffectでinputが変わるたびに呼ばれてinputを更新する
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  // クリア

  const clear = () => {
    setInput('')
  }

  return { input, onChange, clear }
}

export default useTextField
