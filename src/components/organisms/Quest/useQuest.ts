import { AxiosResponse } from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { create } from '../../../Repositories/Repository'
import { emptyQuest, questType } from '../../../Repositories/types/QuestType'
import useToggle from '../../../useToggle'
import { convDate } from '../../../utils/convDate'
import { CardListItemType } from '../../atoms/CardListItem'

const useQuest = () => {
  const modalState = useToggle()
  const [list, setList] = useState<CardListItemType[]>([])
  const [pick, setPick] = useState<questType>(emptyQuest)

  const errorHandler = (code: number) => {
    if (code === 500) {
      toast.error('サーバエラーです。')
    } else if (code === 404) {
      toast.error('リソースが存在しません')
    } else if (code === 401) {
      toast.error('認証に失敗しました')
    }
  }

  // fetch quests
  const fetch = async () => {
    const instance = create()
    try {
      const result: AxiosResponse = await instance.get('/quest')
      convQuest2List(result.data.quests)
    } catch (e: any) {
      errorHandler(Number(e.response.status))
    }
  }

  const onClickCard = (d: questType) => {
    setPick(d)
    modalState.toggle()
  }

  // DetailCardの戻るボタン
  const onClickCancel = () => {
    // Fix: 後でEmptyStateを作る
    setPick(emptyQuest)
    modalState.setIsOpen(false)
  }
  // convert Quest to ListCard
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

  return { fetch, list, pick, modalState, onClickCancel }
}

export default useQuest
