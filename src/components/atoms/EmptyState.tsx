import { Box } from '@mui/material'
import React from 'react'
import { ReactComponent as EmptyIcon } from '../../assets/images/DoIcon1.svg'

const EmptyState = () => {
  return (
    <Box sx={{ p: 3, opacity: 0.2 }}>
      <EmptyIcon width="100%" height="100%" />
    </Box>
  )
}

export default EmptyState
