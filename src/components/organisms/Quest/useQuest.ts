import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack'
import useToggle from '../../../generalHooks/useToggle'
import useUtils from '../../../libs/useUtils'
import { create } from '../../../Repositories/Repository'
import {
  createQuestType,
  emptyQuest,
  questSubComponentKey,
  questType,
  updateQuestType,
} from '../../../Repositories/types/QuestType'
import { convDate } from '../../../libs/convDate'
import { CardListItemType } from '../../atoms/CardListItem'

const useQuest = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { errorHandler } = useUtils()
  const modalState = useToggle()
  const [isLoading, setIsLoading] = useState(false)

  // Listから選択されたquestがはいるstate
  const [quest, setQuest] = useState<questType>(emptyQuest)

  // subコンポーネントのIDが入るstate
  const [sub, setSub] = useState<questSubComponentKey>('Empty')

  // questをlistに変換した配列が入るstate
  const [list, setList] = useState<CardListItemType[]>([])

  // useQuestを使うコンポーネントがレンダリングされたときにfetchを実行する
  useEffect(() => {
    fetch()
  }, [])

  // listをクリックした時のアクション
  const onClickCard = (d: questType) => {
    setQuest(d)
    setSub('Detail')
    modalState.setIsOpen(true)
  }

  // 作成ボタンをクリックした時のアクション
  const onClickCreate = () => {
    setQuest(emptyQuest)
    setSub('Create')
    modalState.setIsOpen(true)
  }

  // 更新ボタンをクリックした時のアクション
  const onClickUpdate = () => {
    // setQuest(emptyQuest)
    setSub('Update')
    modalState.setIsOpen(true)
  }

  // DetailCardの戻るボタンのアクション
  const onClickCancel = () => {
    setSub('Empty')
    modalState.setIsOpen(false)
    setQuest(emptyQuest)
  }

  const onClickDelete = () => {
    setSub('Delete')
  }

  // questDataType から CardListItemTypeへの変換
  const convQuest2List = (data: questType[]) => {
    const listData: CardListItemType[] = data.map((d: questType) => {
      return {
        id: d.id,
        title: d.title,
        date: convDate(d.date),
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
      const result: AxiosResponse = await instance.get('/quest')
      convQuest2List(result.data.quests)
      setIsLoading(false)
    } catch (e: any) {
      errorHandler(Number(e.response.status))
      setIsLoading(true)
    }
  }

  // create quest
  const post = async (req: createQuestType) => {
    const instance = create()
    try {
      setIsLoading(true)
      await instance.post('/quest', req)
      fetch()
      setIsLoading(false)
      enqueueSnackbar('クエスト作成 成功', { variant: 'success' })
    } catch (e: any) {
      errorHandler(Number(e.response.status))
      setIsLoading(false)
      enqueueSnackbar('クエスト作成 失敗', { variant: 'error' })
    }
  }

  // update quest
  const put = async (id: number, req: updateQuestType) => {
    const instance = create()
    try {
      setIsLoading(true)
      await instance.put(`/quest/${id}`, req)
      fetch()
      onClickCancel()
      setIsLoading(false)
      enqueueSnackbar('クエスト更新 成功', { variant: 'success' })
    } catch (e: any) {
      errorHandler(Number(e.response.status))
      setIsLoading(false)
      enqueueSnackbar('クエスト更新 失敗', { variant: 'error' })
    }
  }

  return {
    fetch,
    post,
    put,
    setSub,
    list,
    sub,
    quest,
    isLoading,
    modalState,
    onClickCancel,
    onClickCreate,
    onClickDelete,
    onClickUpdate,
  }
}

export default useQuest
