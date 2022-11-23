import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { SideMenuData } from '../../../libs/SideMenuData'
import SplitTemplate from '../../templates/SplitTemplate'
import DetailCard from '../../DetailCard'
import CardList from '../../molecules/CardList'
import useQuest from './useQuest'
import QuestReportForm from '../../QuestReportForm'
import useAdminState from '../../../recoil/adminState/useAdminState'
import EmptyState from '../../atoms/EmptyState'
import CardFrame from '../../molecules/CardFrame'

const Quest = () => {
  const { fetch, pick, list, modalState, onClickCancel } = useQuest()
  const { isAdmin } = useAdminState()
  const [main, setMain] = useState(<CardList data={[]} />)

  // subをcomponentのIDにする？
  const [sub, setSub] = useState(
    <DetailCard
      title="クエストを選択してください"
      date="date"
      description="クエストを選択してください"
      image="cosmic1"
      point={0}
    />
  )

  useEffect(() => {
    fetch()
  }, [])

  // pickが変わったらsubSetする
  useEffect(() => {
    setSub(
      <DetailCard
        title={pick.title}
        date={pick.date}
        description={pick.description}
        image="cosmic2"
        point={pick.reward}
        forms={<QuestReportForm onCancel={onClickCancel} />}
      />
    )
  }, [pick])
  useEffect(() => {
    setMain(<CardList data={list} />)
  }, [list])

  return (
    <SplitTemplate
      menu={SideMenuData}
      mainPanel={<Box>{main}</Box>}
      subPanel={
        <CardFrame image="cosmic2">
          <EmptyState />
        </CardFrame>
      }
      modalState={modalState}
    />
  )
}

export default Quest
