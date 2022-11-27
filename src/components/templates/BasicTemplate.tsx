import { Box, Drawer, Stack } from '@mui/material'
import React, { FC, ReactElement } from 'react'
import { useToggleType } from '../../generalHooks/useToggle'
import { CONTENTS_PADDING } from '../../libs/LayoutData'
import { sideMenuType } from '../molecules/SideMenu/useSideMenu'
import Navbar from '../Navbar'
import SideMenu from '../SideMenu'

type Props = {
  menu: sideMenuType[]
  sideMenuHandler: useToggleType
  children: ReactElement
}

const BasicTemplate: FC<Props> = (props) => {
  const { menu, sideMenuHandler, children } = props

  return (
    <Box>
      <Navbar sideMenuHandler={sideMenuHandler} />

      <Stack direction="row" spacing={2} justifyContent="space-between">
        {/* side menu */}
        <Box
          flex={1}
          sx={{
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
            height: '100vh',
            pt: CONTENTS_PADDING,
          }}
        >
          <Box position="fixed" sx={{ height: '100vh', px: 3, boxShadow: 3 }}>
            <SideMenu menu={menu} />
          </Box>
        </Box>

        <Drawer
          open={sideMenuHandler.isOpen}
          onClose={sideMenuHandler.toggle}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <Box width={240}>
            <SideMenu menu={menu} />
          </Box>
        </Drawer>

        {/* contents */}
        <Box flex={5} sx={{ pt: CONTENTS_PADDING, height: '100vh' }}>
          {children}
        </Box>
      </Stack>
    </Box>
  )
}

export default BasicTemplate
