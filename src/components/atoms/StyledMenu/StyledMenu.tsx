import React, { FC } from 'react'
import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { menuItemType, useStyledMenuType } from './useStyledMenu'

type Props = {
  menuItems: menuItemType[]
  handler: useStyledMenuType
}

const StyledMenu: FC<Props> = (props) => {
  const { menuItems, handler } = props
  const { handleMenuOpen, anchorEl, toggle } = handler

  return (
    <Box>
      <IconButton onClick={handleMenuOpen}>
        <MenuIcon />
      </IconButton>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={toggle.isOpen}
        onClose={() => toggle.setIsOpen(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {menuItems.map((menu: menuItemType) => (
          <MenuItem onClick={menu.action}>{menu.label}</MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default StyledMenu
