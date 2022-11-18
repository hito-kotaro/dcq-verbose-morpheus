import Box from '@mui/material/Box/Box'
import Stack from '@mui/material/Stack/Stack'
import React from 'react'
import MainPanel from '../MainPanel'
import Navbar from '../Navbar'
import SideMenu from '../SideMenu'
import SubPanel from '../SubPanel'

const SplitTemplate = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideMenu />
        <MainPanel />
        <SubPanel />
      </Stack>
    </Box>
  )
}

export default SplitTemplate
