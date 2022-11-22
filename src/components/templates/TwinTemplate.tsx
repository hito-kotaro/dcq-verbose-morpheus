/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, ReactElement } from 'react'
import { Box, Stack } from '@mui/material'

type Props = {
  leftContent: ReactElement
  rightContent: ReactElement
  xsContent: ReactElement
}

const TwinTemplate: FC<Props> = (props) => {
  const { leftContent, rightContent, xsContent } = props
  return (
    <Box sx={{ height: '100vh' }}>
      <Stack direction="row" justifyContent="space-between" sx={{ height: '100%' }}>
        {/* mobile */}
        <Box bgcolor="black" sx={{ width: '100%', display: { xs: 'block', md: 'none' } }}>
          {xsContent}
        </Box>

        {/* left side */}
        <Box sx={{ width: '50%', display: { xs: 'none', sm: 'none', md: 'block' } }}>{leftContent}</Box>
        {/* right side */}
        <Box sx={{ width: '50%', display: { xs: 'none', sm: 'none', md: 'block' } }}>{rightContent}</Box>
      </Stack>
    </Box>
  )
}

export default TwinTemplate
