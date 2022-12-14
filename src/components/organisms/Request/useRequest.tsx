import { useState, useEffect } from 'react'
import { AxiosResponse } from 'axios'
import { useSnackbar } from 'notistack'
import useToggle from '../../../generalHooks/useToggle'
import useUtils from '../../../libs/useUtils'
import {
  requestType,
  requestSubComponentKey,
  emptyRequest,
  createRequestType,
  updateRequestType,
} from '../../../Repositories/types/RequestType'
import { CardListItemType } from '../../atoms/CardListItem'
import { create } from '../../../Repositories/Repository'
import { convDate } from '../../../libs/utils'
import useAdminState from '../../../recoil/adminState/useAdminState'
import useUserInfoState from '../../../recoil/userInfoState/useUserInfoState'

const useRequest = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { errorHandler } = useUtils()
  const modalState = useToggle()
  const [isLoading, setIsLoading] = useState(false)

  // Listから選択されたrequestがはいるstate
  const [request, setRequest] = useState<requestType>(emptyRequest)

  // subコンポーネントのKeyが入るstate
  const [sub, setSub] = useState<requestSubComponentKey>('Empty')

  // requestをlistに変換した配列が入るstate
  const [list, setList] = useState<CardListItemType[]>([])

  const { isAdmin } = useAdminState()
  const { userInfo } = useUserInfoState()

  // useQuestを使うコンポーネントがレンダリングされたときにfetchを実行する
  useEffect(() => {
    fetch()
  }, [])

  // listをクリックした時のアクション
  const onClickCard = (d: requestType) => {
    setRequest(d)
    setSub('Detail')
    modalState.setIsOpen(true)
  }

  // DetailCardの戻るボタンのアクション
  const onClickCancel = () => {
    setSub('Empty')
    modalState.setIsOpen(false)
    setRequest(emptyRequest)
  }

  const onClickUpdate = (id: number, req: updateRequestType) => {
    put(id, req)
  }

  // questDataType から CardListItemTypeへの変換
  const convRequest2List = (data: requestType[]) => {
    let filtered: requestType[] = []
    // adminの場合
    // openしている全てのリクエストを表示する
    if (isAdmin) {
      filtered = data.filter((d: requestType) => {
        return d.status === 'open'
      })

      // admin以外の場合
      // openしている自分のリクエストのみを表示する
    } else {
      filtered = data.filter((d: requestType) => {
        return d.status === 'open' && d.applicant === userInfo!.name
      })
    }

    const listData: CardListItemType[] = filtered.map((d: requestType) => {
      return {
        id: d.id,
        title: d.title,
        date: convDate(d.created_at),
        description: d.description,
        image: 'cosmic1',
        point: d.reward,
        onClick: () => onClickCard(d),
      }
    })
    setList(listData)
  }

  // fetch quests
  const fetch = async () => {
    const instance = create()
    try {
      setIsLoading(true)
      const result: AxiosResponse = await instance.get('/request')
      convRequest2List(result.data.requests)
      setIsLoading(false)
    } catch (e: any) {
      errorHandler(Number(e.response.status))
      setIsLoading(false)
    }
  }
  // create quest
  const post = async (req: createRequestType) => {
    const instance = create()
    try {
      setIsLoading(true)
      await instance.post('/request', req)
      fetch()
      setIsLoading(false)
      enqueueSnackbar('リクエスト作成 成功', { variant: 'success' })
    } catch (e: any) {
      errorHandler(Number(e.response.status))
      setIsLoading(false)
      enqueueSnackbar('リクエスト作成 失敗', { variant: 'error' })
    }
  }

  // update quest
  const put = async (id: number, req: updateRequestType) => {
    const instance = create()
    try {
      setIsLoading(true)
      await instance.put(`/request/${id}`, req)
      await setTimeout(fetch, 300)
      onClickCancel()
      setIsLoading(false)
      enqueueSnackbar('リクエスト更新 成功', { variant: 'success' })
    } catch (e: any) {
      errorHandler(Number(e.response.status))
      setIsLoading(false)
      enqueueSnackbar('リクエスト更新 失敗', { variant: 'error' })
    }
  }

  return { list, isLoading, fetch, post, put, onClickCancel, onClickUpdate, sub, request, modalState }
}

export default useRequest
