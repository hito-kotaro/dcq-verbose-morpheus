import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import UpdateIcon from '@mui/icons-material/Update'
import SpeedIcon from '@mui/icons-material/Speed'
import DetailCard from '../../DetailCard'
import CardList from '../../molecules/CardList'
import useQuest from './useQuest'
import QuestReportForm from '../../QuestReportForm'
import useAdminState from '../../../recoil/adminState/useAdminState'
import EmptyState from '../../atoms/EmptyState'
import CardFrame from '../../molecules/CardFrame'
import QuestCreateCard from './QuestCreateCard'
import QuestUpdateCard from './QuestUpdateCard'
import ConfirmCard from '../../molecules/ConfirmCard'
import { iconButtonType } from '../../molecules/Buttons'
import HorizonContentsTemplate from '../../templates/HorizonContentsTemplate'

const Quest = () => {
  const {
    quest,
    sub,
    setSub,
    list,
    isLoading,
    modalState,
    post,
    put,
    onClickCancel,
    onClickCreate,
    onClickDelete,
    onClickUpdate,
  } = useQuest()
  const { isAdmin } = useAdminState()

  const buttonList: iconButtonType[] = [
    { id: 1, icon: <UpdateIcon />, action: onClickUpdate },
    { id: 2, icon: <SpeedIcon />, action: onClickDelete },
    { id: 3, icon: <DeleteIcon color="error" />, action: onClickDelete },
  ]

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
          forms={<QuestReportForm quest={quest} onCancel={onClickCancel} />}
        />
      )
    }
    if (sub === 'Create') {
      return <QuestCreateCard onClickCreate={post} onClickCancel={onClickCancel} />
    }
    if (sub === 'Update') {
      return <QuestUpdateCard onClickUpdate={put} onClickCancel={onClickCancel} quest={quest} />
    }
    if (sub === 'Delete') {
      return (
        <ConfirmCard
          confirmText={`${quest.title} ????????????????????????`}
          leftLabel="??????"
          leftAction={() => console.log('delete')}
          rightLabel="??????"
          rightAction={() => setSub('Detail')}
        />
      )
    }

    return <EmptyState />
  }

  return (
    <HorizonContentsTemplate
      title="??????????????????"
      left={<CardList data={list} fab={isAdmin} fabAction={onClickCreate} />}
      right={<CardFrame image="cosmic2">{chComponent()}</CardFrame>}
      modalState={modalState}
      modalContent={<CardFrame image="cosmic2">{chComponent()}</CardFrame>}
      isLoading={isLoading}
    />
  )
}

export default Quest
