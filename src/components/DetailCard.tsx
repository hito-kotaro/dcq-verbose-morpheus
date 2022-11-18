import React, { ReactElement, FC } from 'react'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import WarningIcon from '@mui/icons-material/Warning'
import { pink, red } from '@mui/material/colors'
import { Divider } from '@mui/material'

type Props = {
  title: string
  date: string
  description: string
  image: string
  point: number
  penalty?: boolean
  forms: ReactElement
}

const DetailCard: FC<Props> = (props) => {
  const { title, date, description, image, point, penalty, forms } = props

  return (
    <Card>
      <CardMedia
        component="img"
        height="70"
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        image={`${process.env.PUBLIC_URL!}/img/${image}.jpg`}
        alt="green iguana"
      />
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
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Stack direction="row" spacing={0} sx={{ justifyContent: 'right' }}>
          {penalty ? <WarningIcon sx={{ color: pink[500] }} /> : <FavoriteIcon sx={{ color: pink[500] }} />}
          <Typography gutterBottom component="div">
            {`x ${point}`}
          </Typography>
        </Stack>

        <Divider sx={{ my: 1 }} />
        {forms}
      </CardContent>
    </Card>
  )
}

export default DetailCard
