import React from 'react'
import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group'
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import Quest from '../organisms/Quest/Quest'
import BasicTemplate from '../templates/BasicTemplate'
import { sideMenuType } from '../molecules/SideMenu/useSideMenu'
import useScreenState from '../../recoil/screenState/useScreenState'
import User from '../organisms/User/User'
import Request from '../organisms/Request/Request'

const UserPage = () => {
  const { screen, changeScreen } = useScreenState()
  const sideMenuData: sideMenuType[] = [
    {
      id: 1,
      label: 'DashBoard',
      icon: <DashboardIcon />,
      action: () => changeScreen('DASHBOARD'),
    },
    {
      id: 2,
      label: 'Users',
      icon: <GroupIcon />,
      action: () => changeScreen('USERS'),
    },
    {
      id: 3,
      label: 'Quests',
      icon: <AssignmentLateIcon />,
      action: () => changeScreen('QUESTS'),
    },
    {
      id: 4,
      label: 'Request',
      icon: <AnnouncementIcon />,
      action: () => changeScreen('REQUESTS'),
    },
  ]

  const changeContent = () => {
    if (screen === 'DASHBOARD') {
      return <Box>DASHBOARD</Box>
    }
    if (screen === 'USERS') {
      return <User />
    }
    if (screen === 'QUESTS') {
      return <Quest />
    }
    if (screen === 'REQUESTS') {
      return <Request />
    }
    return <Box>DASHBOARD</Box>
  }

  return <BasicTemplate menu={sideMenuData}>{changeContent()}</BasicTemplate>
}

export default UserPage
