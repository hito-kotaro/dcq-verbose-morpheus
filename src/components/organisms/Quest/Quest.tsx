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
import useStyledMenu, { menuItemType } from '../../atoms/StyledMenu/useStyledMenu'
import ConfirmCard from '../../molecules/ConfirmCard'

const Quest = () => {
  const { quest, sub, setSub, list, modalState, post, onClickCancel, onClickCreate, onClickDelete } = useQuest()
  const { isAdmin } = useAdminState()
  const menuHandler = useStyledMenu()
  const [main, setMain] = useState(<CardList data={[]} />)
  const menuItems: menuItemType[] = [
    { label: 'Update', action: () => console.log('update') },
    { label: 'Delete', action: onClickDelete },
    { label: 'Boost!!', action: () => console.log('boost') },
  ]

  useEffect(() => {
    setMain(<CardList data={list} />)
  }, [list])

  useEffect(() => {
    chComponent()
  }, [sub])

  const chComponent = () => {
    if (sub === 'Detail') {
      return (
        <DetailCard
          title={quest.title}
          date={quest.date}
          description={quest.description}
          menuItems={menuItems}
          menuHandler={menuHandler}
          point={quest.reward}
          forms={<QuestReportForm onCancel={onClickCancel} />}
        />
      )
    }
    if (sub === 'Create') {
      return <QuestCreateCard onClickCreate={post} onClickCancel={onClickCancel} />
    }
    if (sub === 'Delete') {
      return (
        <ConfirmCard
          confirmText={`${quest.title} を削除しますか？`}
          leftLabel="削除"
          leftAction={() => console.log('delete')}
          rightLabel="戻る"
          rightAction={() => setSub('Detail')}
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
      fab={isAdmin}
      fabAction={onClickCreate}
    />
  )
}

export default Quest
