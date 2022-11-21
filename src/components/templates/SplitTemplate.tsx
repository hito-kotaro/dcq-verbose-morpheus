import { Box, Stack, Drawer, Backdrop, Fade, Modal, Typography, styled } from '@mui/material'
import React, { FC, ReactElement } from 'react'
import { CONTENTS_PADDING } from '../../LayoutData'
import { SideMenuDataType } from '../../SideMenuData'
import useToggle, { useToggleType } from '../../useToggle'
import Navbar from '../Navbar'
import SideMenu from '../SideMenu'

type Props = {
  menu: SideMenuDataType[]
  mainPanel: ReactElement
  subPanel: ReactElement
  modalState: useToggleType
}

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const SplitTemplate: FC<Props> = (props) => {
  const { menu, mainPanel, subPanel, modalState } = props
  const menuHandler = useToggle()
  return (
    <>
      <StyledModal open={modalState.isOpen} onClose={modalState.toggle} sx={{ display: 'none' }}>
        <Fade in={modalState.isOpen}>
          <Box width={600} bgcolor="white" p={3} borderRadius={5}>
            {subPanel}
          </Box>
        </Fade>
      </StyledModal>
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
    </>
  )
}

export default SplitTemplate
