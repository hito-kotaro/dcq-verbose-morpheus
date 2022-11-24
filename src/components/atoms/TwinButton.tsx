import { ButtonGroup, Button } from '@mui/material'
import React, { FC } from 'react'

type Props = {
  leftLabel: string
  rightLabel: string
  leftAction: () => void
  rightAction: () => void
}
const TwinButton: FC<Props> = (props) => {
  const { leftLabel, rightLabel, leftAction, rightAction } = props
  return (
    <ButtonGroup variant="contained" fullWidth sx={{ mt: 2 }}>
      <Button onClick={leftAction}>{leftLabel}</Button>
      <Button onClick={rightAction} color="secondary" sx={{ width: '100px' }}>
        {rightLabel}
      </Button>
    </ButtonGroup>
  )
}

export default TwinButton
