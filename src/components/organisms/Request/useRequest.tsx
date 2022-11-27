import { useState, useEffect } from 'react'
import { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'
import useToggle from '../../../generalHooks/useToggle'
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
  const modalState = useToggle()

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

  const errorHandler = (code: number) => {
    if (code === 500) {
      toast.error('サーバエラーです。')
    } else if (code === 404) {
      toast.error('リソースが存在しません')
    } else if (code === 401) {
      toast.error('認証に失敗しました')
    }
  }

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
    // adminの場合全て表示、userの場合自分のリクストのみ表示としたいがうまくいかなかった
    // userInfoがログインのタイミングでしか取得できず、更新とかするとnullになってしまうのでフィルターできない
    // 別にすべで表示されてても良さそう

    // let filtered: requestType[] = []
    // adminの場合
    // openしている全てのリクエストを表示する
    // if (isAdmin) {
    //   filtered = data.filter((d: requestType) => {
    //     return d.status === 'open'
    //   })

    // admin以外の場合
    // openしている自分のリクエストのみを表示する
    // } else {
    //   filtered = data.filter((d: requestType) => {
    //     return d.status === 'open' && d.applicant === userInfo!.name
    //   })

    const filtered: requestType[] = data.filter((d: requestType) => {
      return d.status === 'open'
    })

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
      const result: AxiosResponse = await instance.get('/request')
      convRequest2List(result.data.requests)
    } catch (e: any) {
      errorHandler(Number(e.response.status))
    }
  }
  // create quest
  const post = async (req: createRequestType) => {
    const instance = create()
    try {
      await instance.post('/request', req)
      fetch()
    } catch (e: any) {
      errorHandler(Number(e.response.status))
    }
  }

  // update quest
  const put = async (id: number, req: updateRequestType) => {
    const instance = create()
    try {
      await instance.put(`/request/${id}`, req)
      await setTimeout(fetch, 300)
      onClickCancel()
    } catch (e: any) {
      errorHandler(Number(e.response.status))
    }
  }

  return { list, fetch, post, put, onClickCancel, onClickUpdate, sub, request, modalState }
}

export default useRequest
