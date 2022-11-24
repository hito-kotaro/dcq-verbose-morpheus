import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import UpdateIcon from '@mui/icons-material/Update'
import SpeedIcon from '@mui/icons-material/Speed'
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
import ConfirmCard from '../../molecules/ConfirmCard'
import { iconButtonType } from '../../molecules/Buttons'

const Quest = () => {
  const { quest, sub, setSub, list, modalState, post, onClickCancel, onClickCreate, onClickDelete } = useQuest()
  const { isAdmin } = useAdminState()
  const [main, setMain] = useState(<CardList data={[]} />)

  const buttonList: iconButtonType[] = [
    { icon: <DeleteIcon />, action: onClickDelete },
    { icon: <UpdateIcon />, action: onClickDelete },
    { icon: <SpeedIcon />, action: onClickDelete },
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
          buttonList={buttonList}
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
