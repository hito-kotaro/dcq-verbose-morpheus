import { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'
import { useSnackbar } from 'notistack'
import {
  createRewardType,
  emptyReward,
  rewardType,
  rewradSubComponentKey,
  updateRewardType,
} from '../../../Repositories/types/RewardType'
import { CardListItemType } from '../../atoms/CardListItem'
import { create } from '../../../Repositories/Repository'
import useToggle from '../../../generalHooks/useToggle'
import useUtils from '../../../libs/useUtils'
import { convDate } from '../../../libs/utils'

const useReward = () => {
  const modalState = useToggle()
  const [isLoading, setIsLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const { errorHandler } = useUtils()

  // Listから選択されたquestがはいるstate
  const [reward, setReward] = useState<rewardType>(emptyReward)

  // subコンポーネントのIDが入るstate
  const [sub, setSub] = useState<rewradSubComponentKey>('Empty')

  // questをlistに変換した配列が入るstate
  const [list, setList] = useState<CardListItemType[]>([])

  // useQuestを使うコンポーネントがレンダリングされたときにfetchを実行する
  useEffect(() => {
    fetch()
  }, [])

  // listをクリックした時のアクション
  const onClickCard = (d: rewardType) => {
    setReward(d)
    setSub('Detail')
    modalState.setIsOpen(true)
  }

  // 作成ボタンをクリックした時のアクション
  const onClickCreate = () => {
    setReward(emptyReward)
    setSub('Create')
    modalState.setIsOpen(true)
  }

  // 更新ボタンをクリックした時のアクション
  const onClickUpdate = () => {
    // setQuest(emptyQuest)
    setSub('Update')
    modalState.setIsOpen(true)
  }

  const onClickDelete = () => {
    setSub('Delete')
  }

  // DetailCardの戻るボタンのアクション
  const onClickCancel = () => {
    setSub('Empty')
    modalState.setIsOpen(false)
    setReward(emptyReward)
  }

  // questDataType から CardListItemTypeへの変換
  const convReward2List = (data: rewardType[]) => {
    const listData: CardListItemType[] = data.map((d: rewardType) => {
      return {
        id: d.id,
        title: d.title,
        date: convDate(d.updated_at),
        description: d.description,
        image: 'cosmic1',
        point: d.point,
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
      const result: AxiosResponse = await instance.get('/list')
      convReward2List(result.data.lists)
      setIsLoading(false)
    } catch (e: any) {
      errorHandler(Number(e.response.status))
      setIsLoading(true)
    }
  }

  // create rewrad
  const post = async (req: createRewardType) => {
    const instance = create()
    try {
      setIsLoading(true)
      await instance.post('/list', req)
      fetch()
      setIsLoading(false)
      enqueueSnackbar('どりかむリスト作成 成功', { variant: 'success' })
    } catch (e: any) {
      errorHandler(Number(e.response.status))
      setIsLoading(false)
      enqueueSnackbar('どりかむリスト 失敗', { variant: 'error' })
    }
  }

  // update reward
  const put = async (id: number, req: updateRewardType) => {
    const instance = create()
    try {
      setIsLoading(true)
      await instance.put(`/list/${id}`, req)
      fetch()
      onClickCancel()
      setIsLoading(false)
      enqueueSnackbar('どりかむリスト更新 成功', { variant: 'success' })
    } catch (e: any) {
      errorHandler(Number(e.response.status))
      setIsLoading(false)
      enqueueSnackbar('どりかむリスト更新 失敗', { variant: 'error' })
    }
  }

  return {
    isLoading,
    modalState,
    list,
    reward,
    sub,
    setSub,
    post,
    put,
    onClickCreate,
    onClickCancel,
    onClickUpdate,
    onClickDelete,
  }
}

export default useReward
