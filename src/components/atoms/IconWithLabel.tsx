import React, { FC, ReactElement } from 'react'
import { Stack, Typography } from '@mui/material'

type Props = {
  icon: ReactElement
  label: string
}
const IconWithLabel: FC<Props> = (props) => {
  const { icon, label } = props
  return (
    <Stack>
      {icon}
      <Typography variant="caption" display="block" gutterBottom textAlign="center">
        {label}
      </Typography>
    </Stack>
  )
}

export default IconWithLabel
