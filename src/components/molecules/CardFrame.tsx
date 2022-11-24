import { Box, Card, CardMedia } from '@mui/material'
import React, { FC, ReactElement } from 'react'

type Props = {
  image: string
  children: ReactElement
}

const CardFrame: FC<Props> = (props) => {
  const { image, children } = props
  return (
    <Box sx={{ p: 3 }}>
      <Card>
        <CardMedia component="img" height="70" image={`../../public/img/${image}.jpg`} alt="green iguana" />
        <Box>{children}</Box>
      </Card>
    </Box>
  )
}

export default CardFrame
