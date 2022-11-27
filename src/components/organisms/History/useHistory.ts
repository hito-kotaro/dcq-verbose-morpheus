import { useState, useEffect } from 'react'
import { GridRowsProp } from '@mui/x-data-grid'
import { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'
import { create } from '../../../Repositories/Repository'
import { requestType } from '../../../Repositories/types/RequestType'
import { convDate } from '../../../libs/utils'

const useHistory = () => {
  const [gridData, setGridData] = useState<GridRowsProp>([])
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

  // questDataType から CardListItemTypeへの変換
  const convRequest2Grid = (data: requestType[]) => {
    const grids = data.map((d: requestType) => {
      return {
        id: d.id,
        title: d.title,
        applicant: d.applicant,
        status: d.status,
        authorizer: d.authorizer,
        created_at: convDate(d.created_at),
        updated_at: convDate(d.updated_at),
      }
    })
    console.log(grids)
    setGridData(grids)
  }

  // fetch quests
  const fetch = async () => {
    const instance = create()
    try {
      const result: AxiosResponse = await instance.get('/request')
      convRequest2Grid(result.data.requests)
    } catch (e: any) {
      errorHandler(Number(e.response.status))
    }
  }

  return { gridData }
}

export default useHistory
