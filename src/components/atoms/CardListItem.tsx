/* eslint-disable react/no-children-prop */
import React, { FC } from 'react'
import {
  CardContent,
  CardActionArea,
  Card,
  CardMedia,
  CardHeader,
  Avatar,
  Typography,
  Stack,
  styled,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import WarningIcon from '@mui/icons-material/Warning'
import { pink, red } from '@mui/material/colors'

type Props = {
  card: CardListItemType
}

export type CardListItemType = {
  id: number
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

const CardListItem: FC<Props> = (props) => {
  const { card } = props

  return (
    <CardActionArea onClick={card.onClick} sx={{ minWidth: 256, maxWidth: '100%', p: 1 }}>
      <Card sx={{ maxWidth: '100%' }}>
        <CardMedia component="img" height="70" image={`../../public/img/${card.image}.jpg`} alt="green iguana" />
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              TK
            </Avatar>
          }
          title={card.title}
          subheader={card.date}
        />
        <ListItemContent sx={{ px: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {card.description}
          </Typography>
          <Stack direction="row" spacing={0} sx={{ justifyContent: 'right' }}>
            {card.penalty ? <WarningIcon sx={{ color: pink[500] }} /> : <FavoriteIcon sx={{ color: pink[500] }} />}
            <Typography gutterBottom component="div">
              {`x ${card.point}`}
            </Typography>
          </Stack>
        </ListItemContent>
      </Card>
    </CardActionArea>
  )
}

export default CardListItem
