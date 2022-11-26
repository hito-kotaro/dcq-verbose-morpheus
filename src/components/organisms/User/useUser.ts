import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import useToggle from '../../../generalHooks/useToggle'
import { create } from '../../../Repositories/Repository'
import { createUserType, emptyUser, userSubComponentKey, userType } from '../../../Repositories/types/UserType'

const useUser = () => {
  const modalState = useToggle()

  // fetchしたユーザリストのステート
  const [users, setUsers] = useState<userType[]>([])

  // クリックしたユーザの情報を保持するステート
  const [user, setUser] = useState<userType>(emptyUser)

  // サブパネルのコンポーネントキーを保持するステート
  const [sub, setSub] = useState<userSubComponentKey>('Empty')

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

  // Listをクリックした時のアクション
  const onClickList = (u: userType) => {
    setUser(u)
    setSub('Detail')
    modalState.setIsOpen(true)
  }

  const onClickCreate = () => {
    setSub('Create')
    modalState.setIsOpen(true)
  }

  // DetailCardの戻るボタンのアクション
  const onClickCancel = () => {
    setSub('Empty')
    modalState.setIsOpen(false)
    setUser(emptyUser)
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

  const post = async (req: createUserType) => {
    const instance = create()
    try {
      const result: AxiosResponse = await instance.post('/user', req)
      console.log(result.data)
      fetch()
    } catch (e: any) {
      errorHandler(Number(e.response.status))
    }
  }

  return { users, user, modalState, sub, post, onClickList, onClickCreate, onClickCancel }
}

export default useUser
