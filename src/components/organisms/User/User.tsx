import React from 'react'
import { Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import UpdateIcon from '@mui/icons-material/Update'
import SpeedIcon from '@mui/icons-material/Speed'
import HorizonContentsTemplate from '../../templates/HorizonContentsTemplate'
import useUser from './useUser'
import { iconButtonType } from '../../molecules/Buttons'
import UserList from './UserList'

const User = () => {
  const { users, modalState } = useUser()
  const buttons: iconButtonType[] = [
    { icon: <UpdateIcon />, action: () => {} },
    { icon: <SpeedIcon />, action: () => {} },
    { icon: <DeleteIcon color="error" />, action: () => {} },
  ]

  return (
    <HorizonContentsTemplate
      left={<UserList users={users} buttons={buttons} />}
      right={<Box>UserDetail</Box>}
      modalContent={<Box>modal</Box>}
      modalState={modalState}
    />
  )
}

export default User
