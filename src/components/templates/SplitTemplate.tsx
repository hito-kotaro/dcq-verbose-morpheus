import { Box, Stack, Drawer } from '@mui/material'
import React, { FC, ReactElement } from 'react'
import { CONTENTS_PADDING } from '../../LayoutData'
import { SideMenuDataType } from '../../SideMenuData'
import useToggle from '../../useToggle'
import Navbar from '../Navbar'
import SideMenu from '../SideMenu'

type Props = {
  menu: SideMenuDataType[]
  mainPanel: ReactElement
  subPanel: ReactElement
}

const SplitTemplate: FC<Props> = (props) => {
  const { menu, mainPanel, subPanel } = props
  const menuHandler = useToggle()
  return (
    <Box>
      <Navbar menuHandler={menuHandler} />

      <Stack direction="row" spacing={2} justifyContent="space-between">
        {/* side menu */}
        <Box
          flex={1}
          sx={{
            display: { xs: 'none', md: 'block' },
            height: '100vh',
            pt: CONTENTS_PADDING,
            overflowY: 'scroll',
            boxShadow: 3,
          }}
        >
          <SideMenu menu={menu} />
        </Box>

        <Drawer open={menuHandler.isOpen} onClose={menuHandler.toggle} sx={{ display: { xs: 'block', md: 'none' } }}>
          <Box width={240}>
            <SideMenu menu={menu} />
          </Box>
        </Drawer>

        <Box
          flex={2}
          sx={{
            height: '100vh',
            pt: CONTENTS_PADDING,
            overflow: 'scroll',
            '& ::-webkit-scrollbar': {
              display: 'none',
            },
            '& :hover': {
              '::-webkit-scrollbar': {
                display: 'inline',
              },
            },
          }}
        >
          {mainPanel}
        </Box>

        <Box
          flex={2}
          sx={{
            display: { xs: 'none', md: 'block' },
            height: '100vh',
            py: CONTENTS_PADDING,
            px: 3,
            overflowY: 'scroll',
            boxShadow: 3,
          }}
        >
          {subPanel}
        </Box>
      </Stack>
    </Box>
  )
}

export default SplitTemplate
