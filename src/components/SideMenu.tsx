import React, { FC } from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { SideMenuData, SideMenuDataType } from '../SideMenuData'

type Props = {
  menu: SideMenuDataType[]
}

const SideMenu: FC<Props> = (props) => {
  const { menu } = props
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, boxShadow: 3 }}>
      <Box position="fixed" sx={{ width: { md: 200, xl: 300 } }}>
        <List>
          {menu.map((data: SideMenuDataType) => {
            return (
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{data.icon}</ListItemIcon>
                  <ListItemText primary={data.title} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Box>
  )
}

export default SideMenu
