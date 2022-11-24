import React, { ReactElement, FC, useState } from 'react'
import { Avatar, Box, CardContent, CardHeader, Divider, Stack, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import WarningIcon from '@mui/icons-material/Warning'
import { pink, red } from '@mui/material/colors'
import useToggle from '../generalHooks/useToggle'
import StyledMenu from './atoms/StyledMenu/StyledMenu'
import { menuItemType, useStyledMenuType } from './atoms/StyledMenu/useStyledMenu'
import Buttons, { iconButtonType } from './molecules/Buttons'

type Props = {
  title: string
  date: string
  description: string
  point: number
  buttonList: iconButtonType[]
  penalty?: boolean
  forms?: ReactElement
}

// CardFrameの中身

const DetailCard: FC<Props> = (props) => {
  const { title, date, description, point, buttonList, penalty, forms } = props

  return (
    <Box sx={{ p: 3 }}>
      <Buttons buttonList={buttonList} />
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
    </Box>
  )
}

export default DetailCard
