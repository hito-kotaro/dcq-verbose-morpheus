/* eslint-disable react/no-children-prop */
import React from 'react'
import { Card, CardMedia, CardContent, Typography, Avatar, CardHeader, CardActionArea, Stack } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { pink, red } from '@mui/material/colors'
import styled from '@emotion/styled'

const ListItem = () => {
  const ListItemContent = styled(CardContent)({
    paddingTop: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  })

  return (
    <CardActionArea onClick={() => console.log('click')} sx={{ maxWidth: 345 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="70"
          image={`${process.env.PUBLIC_URL!}/img/cosmic1.jpg`}
          alt="green iguana"
        />
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              TK
            </Avatar>
          }
          title="月報の提出"
          subheader="September 14, 2016"
        />
        <ListItemContent sx={{ px: 2 }}>
          <Typography variant="body2" color="text.secondary">
            毎月第一営業日中に月報を提出する
          </Typography>
          <Stack direction="row" spacing={0} sx={{ justifyContent: 'right' }}>
            <FavoriteIcon sx={{ color: pink[500] }} />
            <Typography gutterBottom component="div">
              x 30
            </Typography>
          </Stack>
        </ListItemContent>
      </Card>
    </CardActionArea>
  )
}

export default ListItem
