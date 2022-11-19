import React, { FC, ReactElement } from 'react'
import Box from '@mui/material/Box/Box'
import Stack from '@mui/material/Stack/Stack'
import Navbar from '../Navbar'

type Props = {
  sideMenu: ReactElement
  mainPanel: ReactElement
  subPanel: ReactElement
}

const SplitTemplate: FC<Props> = (props) => {
  const { sideMenu, mainPanel, subPanel } = props
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        {sideMenu}
        {mainPanel}
        {subPanel}
      </Stack>
    </Box>
  )
}

export default SplitTemplate
