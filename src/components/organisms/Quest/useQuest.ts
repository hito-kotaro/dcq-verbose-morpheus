import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { create } from '../../../Repositories/Repository'
import {
  createQuestType,
  emptyQuest,
  questSubComponentKey,
  questType,
  updateQuestType,
} from '../../../Repositories/types/QuestType'
import useToggle from '../../../generalHooks/useToggle'
import { convDate } from '../../../libs/convDate'
import { CardListItemType } from '../../atoms/CardListItem'

const useQuest = () => {
  const modalState = useToggle()
  const [isLoading, setIsLoading] = useState(false)

  // apiから取得したクエストの配列が入るstate
  const [quests, setQuests] = useState<questType[]>([])

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
      setQuests(result.data.quests)
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
    } catch (e: any) {
      errorHandler(Number(e.response.status))
      setIsLoading(false)
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
    } catch (e: any) {
      errorHandler(Number(e.response.status))
      setIsLoading(false)
    }
  }

  return {
    fetch,
    post,
    put,
    setSub,
    quests,
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
