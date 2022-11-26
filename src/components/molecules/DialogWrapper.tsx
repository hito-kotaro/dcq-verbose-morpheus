import React, { FC } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { useToggleType } from '../../generalHooks/useToggle'

type Props = {
  dialogTitle: string
  dialogMsg: string
  handler: useToggleType
  leftAction: () => void
  rightAction: () => void
}
const DialogWrapper: FC<Props> = (props) => {
  const { dialogTitle, dialogMsg, handler, leftAction, rightAction } = props
  return (
    <Dialog
      open={handler.isOpen}
      onClose={handler.toggle}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{dialogMsg}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={leftAction}>キャンセル</Button>
        <Button onClick={rightAction} autoFocus>
          削除
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogWrapper
