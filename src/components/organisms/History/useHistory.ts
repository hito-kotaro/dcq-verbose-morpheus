import { useState, useEffect, useCallback } from 'react'
import { GridRowsProp, GridRowParams } from '@mui/x-data-grid'
import { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'
import { create } from '../../../Repositories/Repository'
import useToggle from '../../../generalHooks/useToggle'
import { emptyRequest, requestType } from '../../../Repositories/types/RequestType'

const useHistory = () => {
  const [gridData, setGridData] = useState<GridRowsProp>([])
  const [his, setHis] = useState<requestType>(emptyRequest)
  const modalState = useToggle()
  const dialogState = useToggle()

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

  const handleDetailClick = useCallback(
    (params: GridRowParams) => (event: { stopPropagation: () => void }) => {
      event.stopPropagation()
      modalState.setIsOpen(true)
      setHis(params.row)
      // console.log(`handleDetailClick:id=${params.id}`)
    },
    []
  )

  const handleDeleteClick = useCallback(
    (params: GridRowParams) => (event: { stopPropagation: () => void }) => {
      event.stopPropagation()
      dialogState.setIsOpen(true)
      setHis(params.row)
      // console.log(`handleDetailClick:id=${params.id}`)
    },
    []
  )

  // fetch quests
  const fetch = async () => {
    const instance = create()
    try {
      const result: AxiosResponse = await instance.get('/request')
      setGridData(result.data.requests)
      // convRequest2Grid(result.data.requests)
    } catch (e: any) {
      errorHandler(Number(e.response.status))
    }
  }

  return { his, gridData, handleDetailClick, handleDeleteClick, modalState, dialogState }
}

export default useHistory
