import React from 'react'
import { Box } from '@mui/material'
import UpdateIcon from '@mui/icons-material/Update'
import DeleteIcon from '@mui/icons-material/Delete'
import useAdminState from '../../../recoil/adminState/useAdminState'
import EmptyState from '../../atoms/EmptyState'
import DetailCard from '../../DetailCard'
import { iconButtonType } from '../../molecules/Buttons'
import CardFrame from '../../molecules/CardFrame'
import CardList from '../../molecules/CardList'
import ConfirmCard from '../../molecules/ConfirmCard'
import HorizonContentsTemplate from '../../templates/HorizonContentsTemplate'
import RewardCreateCard from './RewardCreateCard'
import useReward from './useReward'
import RewardUpdate from './RewardUpdate'

const Reward = () => {
  const {
    isLoading,
    modalState,
    list,
    sub,
    reward,
    setSub,
    post,
    put,
    onClickCreate,
    onClickCancel,
    onClickDelete,
    onClickUpdate,
  } = useReward()
  const { isAdmin } = useAdminState()

  const buttonList: iconButtonType[] = [
    { id: 1, icon: <UpdateIcon />, action: onClickUpdate },
    { id: 2, icon: <DeleteIcon color="error" />, action: onClickDelete },
  ]

  const chComponent = () => {
    if (sub === 'Detail') {
      return (
        <DetailCard
          title={reward.title}
          date={reward.updated_at}
          description={reward.description}
          buttonList={buttonList}
          point={reward.point}
        />
      )
    }
    if (sub === 'Create') {
      return <RewardCreateCard onClickCreate={post} onClickCancel={onClickCancel} />
    }
    if (sub === 'Update') {
      return <RewardUpdate onClickUpdate={put} onClickCancel={onClickCancel} reward={reward} />
    }
    if (sub === 'Delete') {
      return (
        <ConfirmCard
          confirmText={`${reward.title} を削除しますか？`}
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
    <HorizonContentsTemplate
      title="どりかむリスト"
      left={<CardList data={list} fab={isAdmin} fabAction={onClickCreate} />}
      right={<CardFrame image="cosmic2">{chComponent()}</CardFrame>}
      modalState={modalState}
      modalContent={<CardFrame image="cosmic2">{chComponent()}</CardFrame>}
      isLoading={isLoading}
    />
  )
}

export default Reward
