/* eslint-disable react/no-children-prop */
import React, { FC } from 'react'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import WarningIcon from '@mui/icons-material/Warning'
import { pink, red } from '@mui/material/colors'
import styled from '@emotion/styled'

type Props = {
  title: string
  date: string
  description: string
  image: string
  point: number
  penalty?: boolean
  onClick: () => void
}

const ListItemContent = styled(CardContent)({
  paddingTop: 0,
  '&:last-child': {
    paddingBottom: 0,
  },
})

const ListItem: FC<Props> = (props) => {
  const { title, date, description, image, point, penalty, onClick } = props

  return (
    <CardActionArea onClick={onClick} sx={{ maxWidth: 345, minWidth: 256 }}>
      <Card sx={{ maxWidth: 345 }}>
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
        <ListItemContent sx={{ px: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Stack direction="row" spacing={0} sx={{ justifyContent: 'right' }}>
            {penalty ? <WarningIcon sx={{ color: pink[500] }} /> : <FavoriteIcon sx={{ color: pink[500] }} />}
            <Typography gutterBottom component="div">
              {`x ${point}`}
            </Typography>
          </Stack>
        </ListItemContent>
      </Card>
    </CardActionArea>
  )
}

export default ListItem
