import React, { FC, ReactElement } from 'react'
import { Box, Stack } from '@mui/material'
import Navbar from '../Navbar'
import SideMenu from '../SideMenu'
import { SideMenuDataType } from '../../libs/SideMenuData'
import useToggle from '../../generalHooks/useToggle'

type Props = {
  menu: SideMenuDataType[]
  mainContent: ReactElement
}

const SideMenuTemplate: FC<Props> = (props) => {
  const { menu, mainContent } = props
  const sideMenuHandler = useToggle()

  return (
    <Box>
      <Navbar sideMenuHandler={sideMenuHandler} />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideMenu menu={menu} />
        <Box flex={5}>{mainContent}</Box>
      </Stack>
    </Box>
  )
}

export default SideMenuTemplate
