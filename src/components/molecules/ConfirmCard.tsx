import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import TwinButton from '../atoms/TwinButton'

type Props = {
  confirmText: string
  leftAction: () => void
  leftLabel: string
  rightAction: () => void
  rightLabel: string
}

const ConfirmCard: FC<Props> = (props) => {
  const { confirmText, leftAction, leftLabel, rightAction, rightLabel } = props

  return (
    <Box width="100%">
      <Box sx={{ my: 5, textAlign: 'center' }}>
        <Typography variant="h6">{confirmText}</Typography>
      </Box>
      <Box sx={{ my: 2, px: 2 }}>
        <TwinButton leftLabel={leftLabel} leftAction={leftAction} rightLabel={rightLabel} rightAction={rightAction} />
      </Box>
    </Box>
  )
}
export default ConfirmCard
