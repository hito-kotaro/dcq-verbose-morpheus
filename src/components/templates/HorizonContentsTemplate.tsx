import React, { ReactElement, FC } from 'react'
import { Box, Fade, LinearProgress, Modal, Stack, styled, Typography } from '@mui/material'
import { useToggleType } from '../../generalHooks/useToggle'

type Props = {
  title: string
  left: ReactElement
  right: ReactElement
  modalContent: ReactElement
  modalState: useToggleType
  isLoading: boolean
}

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const HorizonContentsTemplate: FC<Props> = (props) => {
  const { title, left, right, modalContent, modalState, isLoading } = props
  return (
    <>
      <StyledModal open={modalState.isOpen} onClose={modalState.toggle} sx={{ display: { xs: 'flex', lg: 'none' } }}>
        <Fade in={modalState.isOpen}>
          <Box width="100%">{modalContent}</Box>
        </Fade>
      </StyledModal>

      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box flex={1} sx={{ height: '90vh', overflowY: 'scroll' }}>
          <Typography variant="h4" sx={{ mt: 2 }}>
            {title}
          </Typography>
          {isLoading ? <LinearProgress color="secondary" /> : left}
        </Box>
        <Box flex={1} sx={{ height: '90vh', display: { xs: 'none', lg: 'block' }, overflowY: 'scroll' }}>
          {right}
        </Box>
      </Stack>
    </>
  )
}

export default HorizonContentsTemplate
