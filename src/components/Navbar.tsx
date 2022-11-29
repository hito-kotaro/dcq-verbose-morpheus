import React, { FC, useState } from 'react'
import { AppBar, Box, Badge, styled, Toolbar, Typography, Avatar, Menu, MenuItem, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import useToggle, { useToggleType } from '../generalHooks/useToggle'
import { NAVBAR_HEIGHT } from '../libs/LayoutData'
import useLogin from '../Repositories/auth/useLogin'

const Styledtoolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  marginLeft: 'auto',
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
  sideMenuHandler: useToggleType
}

const Navbar: FC<Props> = (props) => {
  const { sideMenuHandler } = props
  const { isOpen, setIsOpen, toggle } = useToggle()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { logout } = useLogin()

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    toggle()
    setAnchorEl(event.currentTarget)
  }

  return (
    <AppBar position="fixed" sx={{ height: NAVBAR_HEIGHT }}>
      <Styledtoolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', lg: 'block' } }}>
          DCQ DEV
        </Typography>

        <Box onClick={sideMenuHandler.toggle}>
          <MenuIcon sx={{ display: { xs: 'block', lg: 'none' } }} />
        </Box>

        <Icons>
          <Badge badgeContent={0} color="secondary">
            <MailIcon />
          </Badge>

          <Badge badgeContent={0} color="secondary">
            <NotificationsIcon />
          </Badge>

          <Button onClick={handleMenuOpen}>
            <Avatar sx={{ width: 30, height: 30 }} src="https://mui.com/static/images/avatar/1.jpg" />
          </Button>
        </Icons>

        <UserBox>
          <Button onClick={handleMenuOpen}>
            <UserBox>
              <Avatar sx={{ width: 30, height: 30 }} src="https://mui.com/static/images/avatar/1.jpg" />
              <Typography color="white" variant="inherit">
                Kotaro Tohi
              </Typography>
            </UserBox>
          </Button>
        </UserBox>
      </Styledtoolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
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
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
