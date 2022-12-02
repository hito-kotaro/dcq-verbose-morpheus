import React, { FC, ReactElement } from 'react'
import { Modal, Fade, Box, styled } from '@mui/material'
import { useToggleType } from '../../generalHooks/useToggle'

const MyModal = styled(Modal)({
  display: 'flex',
  marginLeft: 'auto',
  marginRight: 'auto',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '800px',
})

type Props = {
  modalState: useToggleType
  children: ReactElement
}
const StyledModal: FC<Props> = (props) => {
  const { modalState, children } = props
  return (
    <MyModal open={modalState.isOpen} onClose={modalState.toggle}>
      <Fade in={modalState.isOpen}>
        <Box width="100%">{children}</Box>
      </Fade>
    </MyModal>
  )
}

export default StyledModal
