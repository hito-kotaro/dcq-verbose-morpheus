import React from 'react'
import { AppBar, Box, Badge, styled, Toolbar, Typography, Avatar, Menu, MenuItem } from '@mui/material'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import useToggle from '../useToggle'

const Styledtoolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}))

const Navbar = () => {
  const { isOpen, setIsOpen, toggle } = useToggle()
  return (
    <AppBar position="sticky">
      <Styledtoolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          DCQ DEV
        </Typography>
        <TipsAndUpdatesIcon sx={{ display: { xs: 'block', sm: 'none' } }} />

        <Icons>
          <Badge badgeContent={0} color="secondary">
            <MailIcon />
          </Badge>

          <Badge badgeContent={0} color="secondary">
            <NotificationsIcon />
          </Badge>

          <Avatar onClick={toggle} sx={{ width: 30, height: 30 }} src="https://mui.com/static/images/avatar/1.jpg" />
        </Icons>

        <UserBox onClick={toggle}>
          <Avatar sx={{ width: 30, height: 30 }} src="https://mui.com/static/images/avatar/1.jpg" />
          <Typography variant="inherit">Kotaro Tohi</Typography>
        </UserBox>
      </Styledtoolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={toggle}>Profile</MenuItem>
        <MenuItem onClick={toggle}>My account</MenuItem>
        <MenuItem onClick={toggle}>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
