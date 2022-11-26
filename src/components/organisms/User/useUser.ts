import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import useToggle from '../../../generalHooks/useToggle'
import { create } from '../../../Repositories/Repository'
import { userType } from '../../../Repositories/types/UserType'

const useUser = () => {
  const modalState = useToggle()

  // fetchしたユーザリストのステート
  const [users, setUsers] = useState<userType[]>([])

  useEffect(() => {
    fetch()
  }, [])

  const errorHandler = (code: number) => {
    if (code === 500) {
      toast.error('サーバエラーです。')
    } else if (code === 404) {
      toast.error('リソースが存在しません')
    } else if (code === 401) {
      toast.error('認証に失敗しました')
    }
  }

  // questDataType から CardListItemTypeへの変換

  const fetch = async () => {
    const instance = create()
    try {
      const result: AxiosResponse = await instance.get('/user')
      setUsers(result.data.users)
    } catch (e: any) {
      errorHandler(Number(e.response.status))
    }
  }

  return { users, modalState }
}

export default useUser
