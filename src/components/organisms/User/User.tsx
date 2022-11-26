import React from 'react'
import { Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import UpdateIcon from '@mui/icons-material/Update'
import HorizonContentsTemplate from '../../templates/HorizonContentsTemplate'
import useUser from './useUser'
import { iconButtonType } from '../../molecules/Buttons'
import UserList from './UserList'
import EmptyState from '../../atoms/EmptyState'
import CardFrame from '../../molecules/CardFrame'
import DetailCard from '../../DetailCard'
import UserCreateCard from './UserCreateCard'

const User = () => {
  const { users, user, modalState, sub, post, onClickList, onClickCreate, onClickCancel } = useUser()
  const buttons: iconButtonType[] = [
    { icon: <UpdateIcon />, action: () => {} },
    { icon: <DeleteIcon color="error" />, action: () => {} },
  ]

  const chComponetn = () => {
    if (sub === 'Detail') {
      return <DetailCard title={user.name} date="" description="" point={user.point} buttonList={buttons} />
    }

    if (sub === 'Create') {
      return <UserCreateCard onClickCreate={post} onClickCancel={onClickCancel} />
    }

    if (sub === 'Update') {
      return <Box>Update</Box>
    }
    if (sub === 'Delete') {
      return <Box>Delete</Box>
    }
    return <EmptyState />
  }

  return (
    <HorizonContentsTemplate
      left={<UserList users={users} buttons={buttons} onClickList={onClickList} fab fabAction={onClickCreate} />}
      right={<CardFrame image="cosmic2">{chComponetn()}</CardFrame>}
      modalContent={<CardFrame image="cosmic2">{chComponetn()}</CardFrame>}
      modalState={modalState}
    />
  )
}

export default User
