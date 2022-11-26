import React, { FC } from 'react'
import { Box, Divider, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { SPLIT_FEB_BUTTON_BOTTOM } from '../../../libs/LayoutData'
import { userType } from '../../../Repositories/types/UserType'
import { iconButtonType } from '../../molecules/Buttons'
import UserListItem from './UserListItem'

type Props = {
  users: userType[]
  buttons: iconButtonType[]
  // eslint-disable-next-line no-unused-vars
  onClickList: (u: userType) => void
  fab?: boolean
  fabAction: () => void
}

const UserList: FC<Props> = (props) => {
  const { users, buttons, onClickList, fab, fabAction } = props
  return (
    <Box p={2} alignContent="center">
      {users.map((u: userType) => {
        return (
          <Box>
            <UserListItem user={u} buttonList={buttons} onClickList={onClickList} />
            <Divider />
          </Box>
        )
      })}
      {fab ? (
        <Box position="fixed" sx={{ bottom: SPLIT_FEB_BUTTON_BOTTOM }}>
          <Fab color="secondary" aria-label="add" onClick={fabAction}>
            <AddIcon />
          </Fab>
        </Box>
      ) : (
        ''
      )}
    </Box>
  )
}

export default UserList
