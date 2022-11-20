import React from 'react'
import { Box, Stack } from '@mui/material'
import Navbar from '../Navbar'
import SideMenu from '../SideMenu'
import MainPanel from '../MainPanel'
import { SideMenuData } from '../../SideMenuData'

const SideMenuTemplate = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideMenu menu={SideMenuData} />
        <Box flex={5}>
          <MainPanel />
        </Box>
      </Stack>
    </Box>
  )
}

export default SideMenuTemplate
