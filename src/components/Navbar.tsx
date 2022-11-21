import React, { FC } from 'react'
import { AppBar, Box, Badge, styled, Toolbar, Typography, Avatar, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import useToggle, { useToggleType } from '../useToggle'
import { NAVBAR_HEIGHT } from '../LayoutData'

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

type Props = {
  menuHandler: useToggleType
}

const Navbar: FC<Props> = (props) => {
  const { menuHandler } = props
  const { isOpen, setIsOpen, toggle } = useToggle()
  return (
    <AppBar position="fixed" sx={{ height: NAVBAR_HEIGHT }}>
      <Styledtoolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          DCQ DEV
        </Typography>
        <MenuIcon sx={{ display: { xs: 'block', md: 'none' } }} />

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
