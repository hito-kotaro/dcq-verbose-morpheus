import React from 'react'
import { Box } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import HistoryIcon from '@mui/icons-material/History'
import GroupIcon from '@mui/icons-material/Group'
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import Quest from '../organisms/Quest/Quest'
import useScreenState from '../../recoil/screenState/useScreenState'
import { sideMenuType } from '../molecules/SideMenu/useSideMenu'
import BasicTemplate from '../templates/BasicTemplate'
import User from '../organisms/User/User'
import Request from '../organisms/Request/Request'
import History from '../organisms/History/History'
import useToggle from '../../generalHooks/useToggle'
import { screenKeys } from '../../recoil/screenState/screenKeys'
import Reward from '../organisms/Reward/Reward'

const AdminPage = () => {
  const { screen, changeScreen } = useScreenState()
  const sideMenuHandler = useToggle()

  const onClickSideMenuItem = (key: screenKeys) => {
    changeScreen(key)
    sideMenuHandler.setIsOpen(false)
  }

  const sideMenuData: sideMenuType[] = [
    {
      id: 1,
      label: 'DashBoard',
      icon: <DashboardIcon />,
      action: () => onClickSideMenuItem('DASHBOARD'),
    },
    {
      id: 2,
      label: 'Users',
      icon: <GroupIcon />,
      action: () => onClickSideMenuItem('USERS'),
    },
    {
      id: 3,
      label: 'Quests',
      icon: <AssignmentLateIcon />,
      action: () => onClickSideMenuItem('QUESTS'),
    },
    {
      id: 4,
      label: 'Request',
      icon: <AnnouncementIcon />,
      action: () => onClickSideMenuItem('REQUESTS'),
    },
    {
      id: 5,
      label: 'History',
      icon: <HistoryIcon />,
      action: () => onClickSideMenuItem('HISTORIES'),
    },
    {
      id: 6,
      label: 'Reward',
      icon: <EmojiEventsIcon />,
      action: () => onClickSideMenuItem('REWARDS'),
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
      return <History changeScreen={changeScreen} />
    }
    if (screen === 'REWARDS') {
      return <Reward />
    }
    return <Box>DASHBOARD</Box>
  }

  return (
    <BasicTemplate menu={sideMenuData} sideMenuHandler={sideMenuHandler}>
      {changeContent()}
    </BasicTemplate>
  )
}

export default AdminPage
