/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { FC, ReactElement } from 'react'
import { Box, Stack } from '@mui/material'

type Props = {
  leftContent: ReactElement
  rightContent: ReactElement
}

const TwinTemplate: FC<Props> = (props) => {
  const { leftContent, rightContent } = props
  return (
    <Box sx={{ height: '100vh' }}>
      <Stack direction="row" justifyContent="space-between" sx={{ height: '100%' }}>
        {/* left side */}
        <Box sx={{ width: '50%' }}>{leftContent}</Box>
        {/* right side */}
        <Box sx={{ width: '50%' }}>{rightContent}</Box>
      </Stack>
    </Box>
  )
}

export default TwinTemplate
