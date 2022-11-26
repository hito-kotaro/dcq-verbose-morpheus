import { Box, Divider } from '@mui/material'
import React, { FC } from 'react'
import { userType } from '../../../Repositories/types/UserType'
import { iconButtonType } from '../../molecules/Buttons'
import UserListItem from './UserListItem'

type Props = {
  users: userType[]
  buttons: iconButtonType[]
}

const UserList: FC<Props> = (props) => {
  const { users, buttons } = props
  return (
    <Box p={2} alignContent="center">
      {users.map((u: userType) => {
        return (
          <Box>
            <UserListItem user={u} buttonList={buttons} />
            <Divider />
          </Box>
        )
      })}
    </Box>
  )
}

export default UserList
