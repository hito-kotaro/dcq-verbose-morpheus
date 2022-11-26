import React, { FC } from 'react'
import { Box, Divider, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import UpdateIcon from '@mui/icons-material/Update'
import { SPLIT_FEB_BUTTON_BOTTOM } from '../../../libs/LayoutData'
import { userType } from '../../../Repositories/types/UserType'
import { iconButtonType } from '../../molecules/Buttons'
import UserListItem from './UserListItem'
import useAdminState from '../../../recoil/adminState/useAdminState'

type Props = {
  users: userType[]
  // eslint-disable-next-line no-unused-vars
  onClickUpdate: () => void
  onClickDelete: (u: userType) => void
  onClickList: (u: userType) => void
  fab?: boolean
  fabAction: () => void
}

// adminの場合 => 全て表示
const UserList: FC<Props> = (props) => {
  const { users, onClickList, onClickUpdate, onClickDelete, fab, fabAction } = props
  const { isAdmin } = useAdminState()
  return (
    <Box p={2} alignContent="center">
      {users.map((u: userType) => {
        const buttons: iconButtonType[] = [
          { id: 1, icon: <UpdateIcon />, action: onClickUpdate },
          { id: 2, icon: <DeleteIcon color="error" />, action: () => onClickDelete(u) },
        ]

        return isAdmin ? (
          <Box key={u.id}>
            <UserListItem user={u} buttonList={buttons} onClickList={onClickList} />
            <Divider />
          </Box>
        ) : (
          <Box key={u.id}>
            <UserListItem user={u} buttonList={[]} onClickList={onClickList} />
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
