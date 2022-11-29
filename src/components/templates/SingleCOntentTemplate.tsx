import React, { FC, ReactElement } from 'react'
import { Box } from '@mui/material'
import { useToggleType } from '../../generalHooks/useToggle'
import StyledModal from '../molecules/StyledModal'

type Props = {
  children: ReactElement
  modalChildren: ReactElement
  modalState: useToggleType
}
const SingleCOntentTemplate: FC<Props> = (props) => {
  const { children, modalChildren, modalState } = props

  return (
    <>
      <StyledModal modalState={modalState}>{modalChildren}</StyledModal>
      <Box sx={{ width: '100%', height: '100%', p: 5 }}>{children}</Box>
    </>
  )
}

export default SingleCOntentTemplate
