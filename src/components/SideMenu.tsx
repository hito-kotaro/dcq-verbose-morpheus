import React, { FC } from 'react'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { sideMenuType } from './molecules/SideMenu/useSideMenu'

type Props = {
  menu: sideMenuType[]
}

const SideMenu: FC<Props> = (props) => {
  const { menu } = props
  return (
    <List>
      {menu.map((data: sideMenuType) => {
        return (
          <ListItem disablePadding key={data.id}>
            <ListItemButton onClick={data.action}>
              <ListItemIcon>{data.icon}</ListItemIcon>
              <ListItemText primary={data.label} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

export default SideMenu
