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
  const { fetch, quest, sub, list, modalState, onClickCancel } = useQuest()
  const { isAdmin } = useAdminState()
  const [main, setMain] = useState(<CardList data={[]} />)

  useEffect(() => {
    fetch()
  }, [])

  useEffect(() => {
    setMain(<CardList data={list} />)
  }, [list])

  useEffect(() => {})

  const chComponent = () => {
    if (sub === 'Detail') {
      return (
        <DetailCard
          title={quest.title}
          date={quest.date}
          description={quest.description}
          point={quest.reward}
          forms={<QuestReportForm onCancel={onClickCancel} />}
        />
      )
    }

    return <EmptyState />
  }

  return (
    <SplitTemplate
      menu={SideMenuData}
      mainPanel={<Box>{main}</Box>}
      subPanel={<CardFrame image="cosmic2">{chComponent()}</CardFrame>}
      modalState={modalState}
    />
  )
}

export default Quest
