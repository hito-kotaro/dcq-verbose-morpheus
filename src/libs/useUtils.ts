import { useSnackbar } from 'notistack'

const useUtils = () => {
  const { enqueueSnackbar } = useSnackbar()

  const errorHandler = (code: number) => {
    if (code === 500) {
      enqueueSnackbar('サーバエラーです', { variant: 'error' })
    } else if (code === 404) {
      enqueueSnackbar('リソースが存在しません', { variant: 'error' })
    } else if (code === 401) {
      enqueueSnackbar('認証に失敗しました', { variant: 'error' })
    }
  }

  return { errorHandler }
}

export default useUtils
