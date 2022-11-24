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
import QuestCreateCard from './QuestCreateCard'

const Quest = () => {
  const { quest, sub, list, modalState, post, onClickCancel, onClickCreate } = useQuest()
  const { isAdmin } = useAdminState()
  const [main, setMain] = useState(<CardList data={[]} />)

  useEffect(() => {
    setMain(<CardList data={list} />)
  }, [list])

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
    if (sub === 'Create') {
      return <QuestCreateCard onClickCreate={post} onClickCancel={onClickCancel} />
    }

    return <EmptyState />
  }

  return (
    <SplitTemplate
      menu={SideMenuData}
      mainPanel={<Box>{main}</Box>}
      subPanel={<CardFrame image="cosmic2">{chComponent()}</CardFrame>}
      modalState={modalState}
      fab={isAdmin}
      fabAction={onClickCreate}
    />
  )
}

export default Quest
