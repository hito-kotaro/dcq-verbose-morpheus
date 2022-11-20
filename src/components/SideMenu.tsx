import React, { FC } from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { SideMenuDataType } from '../SideMenuData'

type Props = {
  menu: SideMenuDataType[]
}

const SideMenu: FC<Props> = (props) => {
  const { menu } = props
  return (
    <List>
      {menu.map((data: SideMenuDataType) => {
        return (
          <ListItem disablePadding key={data.id}>
            <ListItemButton onClick={() => console.log(data.title)}>
              <ListItemIcon>{data.icon}</ListItemIcon>
              <ListItemText primary={data.title} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

export default SideMenu
