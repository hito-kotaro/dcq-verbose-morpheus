import React, { FC } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material'
import { useToggleType } from '../../generalHooks/useToggle'

type Props = {
  handler: useToggleType
  title: string
  message: string
  action: () => void
  buttonText: string
  buttonColor: 'inherit' | 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | undefined
}

const StyledDialog: FC<Props> = (props) => {
  const { handler, title, message, buttonText, buttonColor, action } = props

  const onClickLeft = () => {
    action()
    handler.setIsOpen(false)
  }

  return (
    <Dialog open={handler.isOpen} onClose={() => handler.setIsOpen(false)}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickLeft}>キャンセル</Button>
        <Button onClick={handler.toggle} autoFocus color={buttonColor}>
          {buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default StyledDialog
