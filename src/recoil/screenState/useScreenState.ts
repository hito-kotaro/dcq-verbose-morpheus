import { useRecoilState } from 'recoil'
import { screenKeys } from './screenKeys'
import { screenState } from './screenState'

const useScreenState = () => {
  const [screen, setScreen] = useRecoilState(screenState)

  const changeScreen = (key: screenKeys) => {
    setScreen(key)
  }
  return { screen, changeScreen }
}

export default useScreenState
