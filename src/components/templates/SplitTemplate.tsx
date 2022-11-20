import React, { FC, ReactElement } from 'react'
import Box from '@mui/material/Box/Box'
import Stack from '@mui/material/Stack/Stack'
import Navbar from '../Navbar'
import { SideMenuDataType } from '../../SideMenuData'
import SideMenu from '../SideMenu'
import { CONTENTS_MARGIN } from '../../LayoutData'

type Props = {
  menu: SideMenuDataType[]
  mainPanel: ReactElement
  subPanel: ReactElement
}

const SplitTemplate: FC<Props> = (props) => {
  const { menu, mainPanel, subPanel } = props
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        {/* side menu */}
        <Box flex={1} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <Box position="fixed" sx={{ mt: CONTENTS_MARGIN, width: { md: 200, xl: 300 } }}>
            <SideMenu menu={menu} />
          </Box>
        </Box>

        {/* main panel */}
        <Box flex={2} sx={{ pt: CONTENTS_MARGIN, height: '95vh' }}>
          {mainPanel}
        </Box>

        {/* sub panel */}
        <Box flex={2} pt={2} px={3} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <Box position="fixed" sx={{ mt: CONTENTS_MARGIN, width: { md: 300, lg: 430, xl: 700 }, height: '85vh' }}>
            {subPanel}
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default SplitTemplate
