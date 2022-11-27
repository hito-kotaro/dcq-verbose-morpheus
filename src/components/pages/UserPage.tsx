import React from 'react'
import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import HistoryIcon from '@mui/icons-material/History'
import GroupIcon from '@mui/icons-material/Group'
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import Quest from '../organisms/Quest/Quest'
import BasicTemplate from '../templates/BasicTemplate'
import { sideMenuType } from '../molecules/SideMenu/useSideMenu'
import useScreenState from '../../recoil/screenState/useScreenState'
import User from '../organisms/User/User'
import Request from '../organisms/Request/Request'
import History from '../organisms/History/History'
import { screenKeys } from '../../recoil/screenState/screenKeys'
import useToggle from '../../generalHooks/useToggle'

const UserPage = () => {
  const { screen, changeScreen } = useScreenState()
  const sideMenuHandler = useToggle()

  const sideMenuAction = (key: screenKeys) => {
    changeScreen(key)
    sideMenuHandler.setIsOpen(false)
  }
  const sideMenuData: sideMenuType[] = [
    {
      id: 1,
      label: 'DashBoard',
      icon: <DashboardIcon />,
      action: () => sideMenuAction('DASHBOARD'),
    },
    {
      id: 2,
      label: 'Users',
      icon: <GroupIcon />,
      action: () => sideMenuAction('USERS'),
    },
    {
      id: 3,
      label: 'Quests',
      icon: <AssignmentLateIcon />,
      action: () => sideMenuAction('QUESTS'),
    },
    {
      id: 4,
      label: 'Request',
      icon: <AnnouncementIcon />,
      action: () => sideMenuAction('REQUESTS'),
    },
    {
      id: 5,
      label: 'History',
      icon: <HistoryIcon />,
      action: () => sideMenuAction('HISTORIES'),
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
    if (screen === 'HISTORIES') {
      return <History />
    }
    return <Box>DASHBOARD</Box>
  }

  return (
    <BasicTemplate menu={sideMenuData} sideMenuHandler={sideMenuHandler}>
      {changeContent()}
    </BasicTemplate>
  )
}

export default UserPage
