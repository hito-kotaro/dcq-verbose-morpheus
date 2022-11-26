import React, { FC } from 'react'
import { ListItem, ListItemIcon, Avatar, ListItemText, Box, ListItemButton } from '@mui/material'

import { red } from '@mui/material/colors'
import Buttons, { iconButtonType } from '../../molecules/Buttons'
import { userType } from '../../../Repositories/types/UserType'

export type userListItemType = {
  buttonList: iconButtonType[]
  user: userType
}

type Props = {
  user: userType
  buttonList: iconButtonType[]
}

const UserListItem: FC<Props> = (props) => {
  const { user, buttonList } = props

  return (
    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            TK
          </Avatar>
        </ListItemIcon>
        <ListItemText primary={user.name} />
      </ListItemButton>

      <Box>
        <Buttons buttonList={buttonList} />
      </Box>
    </ListItem>
  )
}

export default UserListItem
