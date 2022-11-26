import { ButtonGroup, Button } from '@mui/material'
import React, { FC } from 'react'

type Props = {
  leftLabel: string
  leftDisabled?: boolean
  rightLabel: string
  rightDisabled?: boolean
  leftAction: () => void
  rightAction: () => void
}
const TwinButton: FC<Props> = (props) => {
  const { leftLabel, rightLabel, leftDisabled, rightDisabled, leftAction, rightAction } = props
  return (
    <ButtonGroup variant="contained" fullWidth sx={{ mt: 2 }}>
      <Button onClick={leftAction} disabled={leftDisabled}>
        {leftLabel}
      </Button>
      <Button onClick={rightAction} disabled={rightDisabled} color="secondary" sx={{ width: '100px' }}>
        {rightLabel}
      </Button>
    </ButtonGroup>
  )
}

export default TwinButton
