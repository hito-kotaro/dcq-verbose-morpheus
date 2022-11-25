import React, { FC, ReactElement } from 'react'
import { Box, Stack, Drawer, Fade, Modal, styled, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { CONTENTS_PADDING, SPLIT_FEB_BUTTON_BOTTOM } from '../../libs/LayoutData'
import useToggle, { useToggleType } from '../../generalHooks/useToggle'
import Navbar from '../Navbar'
import SideMenu from '../molecules/SideMenu/SideMenu'
import { SideMenuDataType } from '../molecules/SideMenu/SideMenuData'

type Props = {
  menu: SideMenuDataType[]
  mainPanel: ReactElement
  subPanel: ReactElement
  modalState: useToggleType
  fab?: boolean
  fabAction?: () => void
}

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const SplitTemplate: FC<Props> = (props) => {
  const { menu, mainPanel, subPanel, modalState, fab, fabAction } = props
  const sideMenuHandler = useToggle()

  return (
    <>
      <StyledModal open={modalState.isOpen} onClose={modalState.toggle} sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Fade in={modalState.isOpen}>
          <Box width="100%">{subPanel}</Box>
        </Fade>
      </StyledModal>

      <Box>
        <Navbar sideMenuHandler={sideMenuHandler} />

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

          <Drawer
            open={sideMenuHandler.isOpen}
            onClose={sideMenuHandler.toggle}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
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
            {fab ? (
              <Box position="fixed" sx={{ bottom: SPLIT_FEB_BUTTON_BOTTOM }}>
                <Fab color="secondary" aria-label="add" onClick={fabAction}>
                  <AddIcon />
                </Fab>
              </Box>
            ) : (
              ''
            )}
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
