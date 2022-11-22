import React, { ReactElement, FC } from 'react'
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Divider, Stack, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import WarningIcon from '@mui/icons-material/Warning'
import { pink, red } from '@mui/material/colors'

type Props = {
  title: string
  date: string
  description: string
  image: string
  point: number
  penalty?: boolean
  forms?: ReactElement
}

const DetailCard: FC<Props> = (props) => {
  const { title, date, description, image, point, penalty, forms } = props

  return (
    <Box sx={{ p: 3 }}>
      <Card>
        <CardMedia component="img" height="70" image={`../../public/img/${image}.jpg`} alt="green iguana" />
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              TK
            </Avatar>
          }
          title={title}
          subheader={date}
        />
        <CardContent sx={{ p: 2 }}>
          <Box>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>
          <Stack direction="row" spacing={0} sx={{ justifyContent: 'right' }}>
            {penalty ? <WarningIcon sx={{ color: pink[500] }} /> : <FavoriteIcon sx={{ color: pink[500] }} />}
            <Typography gutterBottom component="div">
              {`x ${point}`}
            </Typography>
          </Stack>

          <Divider sx={{ my: 3 }} />
          {forms || ''}
        </CardContent>
      </Card>
    </Box>
  )
}

export default DetailCard
