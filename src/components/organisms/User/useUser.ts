import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useSnackbar, VariantType } from 'notistack'
import useToggle from '../../../generalHooks/useToggle'
import { create } from '../../../Repositories/Repository'
import {
  createUserType,
  emptyUser,
  updateUserType,
  userSubComponentKey,
  userType,
} from '../../../Repositories/types/UserType'
import { errorHandler } from '../../../libs/utils'

const useUser = () => {
  const { enqueueSnackbar } = useSnackbar()
  const modalState = useToggle()
  const dialogState = useToggle()

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

  const handleClickVariant = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant })
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
      await instance.post('/user', req)
      fetch()
      handleClickVariant('ユーザ作成 成功', 'success')
    } catch (e: any) {
      errorHandler(Number(e.response.status))
      handleClickVariant('ユーザ作成 失敗', 'error')
    }
  }

  const put = async (id: number, req: updateUserType) => {
    const instance = create()
    try {
      await instance.put(`/user/${id}`, req)
      await setTimeout(fetch, 300)
      onClickCancel()
      handleClickVariant('ユーザ更新 成功', 'success')
    } catch (e: any) {
      errorHandler(Number(e.response.status))
      handleClickVariant('ユーザ更新 失敗', 'error')
    }
  }

  return {
    users,
    user,
    modalState,
    dialogState,
    sub,
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
