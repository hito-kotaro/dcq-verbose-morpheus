import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack'
import useToggle from '../../../generalHooks/useToggle'
import useUtils from '../../../libs/useUtils'
import { create } from '../../../Repositories/Repository'
import {
  createUserType,
  emptyUser,
  updateUserType,
  userSubComponentKey,
  userType,
} from '../../../Repositories/types/UserType'

const useUser = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { errorHandler } = useUtils()
  const modalState = useToggle()
  const dialogState = useToggle()
  const [isLoading, setIsLoading] = useState(false)

  // fetchしたユーザリストのステート
  const [users, setUsers] = useState<userType[]>([])

  // クリックしたユーザの情報を保持するステート
  const [user, setUser] = useState<userType>(emptyUser)

  // サブパネルのコンポーネントキーを保持するステート
  const [sub, setSub] = useState<userSubComponentKey>('Empty')

  useEffect(() => {
    fetch()
  }, [])

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

  const onClickUpdate = () => {
    setSub('Update')
    modalState.setIsOpen(true)
  }

  // DetailCardの戻るボタンのアクション
  const onClickCancel = () => {
    setSub('Empty')
    modalState.setIsOpen(false)
    setUser(emptyUser)
  }

  const onClickDelete = (u: userType) => {
    setUser(u)
    dialogState.setIsOpen(true)
  }

  // questDataType から CardListItemTypeへの変換
  const fetch = async () => {
    const instance = create()
    try {
      setIsLoading(true)
      const result: AxiosResponse = await instance.get('/user')
      setUsers(result.data.users)
      setIsLoading(false)
    } catch (e: any) {
      errorHandler(Number(e.response.status))
      setIsLoading(false)
    }
  }

  const post = async (req: createUserType) => {
    const instance = create()
    try {
      setIsLoading(true)
      await instance.post('/user', req)
      fetch()
      setIsLoading(false)
      enqueueSnackbar('ユーザ作成 成功', { variant: 'success' })
    } catch (e: any) {
      errorHandler(Number(e.response.status))
      setIsLoading(false)
      enqueueSnackbar('ユーザ作成 失敗', { variant: 'error' })
    }
  }

  const put = async (id: number, req: updateUserType) => {
    const instance = create()
    try {
      setIsLoading(true)
      await instance.put(`/user/${id}`, req)
      await setTimeout(fetch, 300)
      onClickCancel()
      setIsLoading(false)
      enqueueSnackbar('ユーザ更新 成功', { variant: 'success' })
    } catch (e: any) {
      errorHandler(Number(e.response.status))
      setIsLoading(false)
      enqueueSnackbar('ユーザ更新 失敗', { variant: 'error' })
    }
  }

  return {
    users,
    user,
    modalState,
    dialogState,
    sub,
    isLoading,
    post,
    put,
    onClickList,
    onClickCreate,
    onClickCancel,
    onClickUpdate,
    onClickDelete,
  }
}

export default useUser
