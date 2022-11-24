import React, { ReactElement, FC, useState } from 'react'
import { Avatar, Box, CardContent, CardHeader, Divider, Stack, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import WarningIcon from '@mui/icons-material/Warning'
import { pink, red } from '@mui/material/colors'
import useToggle from '../generalHooks/useToggle'
import StyledMenu from './atoms/StyledMenu/StyledMenu'
import { menuItemType, useStyledMenuType } from './atoms/StyledMenu/useStyledMenu'

type Props = {
  title: string
  date: string
  description: string
  point: number
  menuItems?: menuItemType[]
  penalty?: boolean
  forms?: ReactElement
  menuHandler: useStyledMenuType
}

// CardFrameの中身

const DetailCard: FC<Props> = (props) => {
  const { title, date, description, point, menuItems, menuHandler, penalty, forms } = props
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const menu = useToggle()
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    menu.toggle()
    setAnchorEl(event.currentTarget)
  }
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {menuItems ? <StyledMenu menuItems={menuItems} handler={menuHandler} /> : 'kuso'}
      </Box>

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
