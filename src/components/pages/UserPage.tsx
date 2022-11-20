import Box from '@mui/material/Box'
import React from 'react'
import MainPanel from '../MainPanel'
import SideMenu from '../SideMenu'
import SubPanel from '../SubPanel'
import SplitTemplate from '../templates/SplitTemplate'

const UserPage = () => {
  return <SplitTemplate sideMenu={<SideMenu />} mainPanel={<MainPanel />} subPanel={<SubPanel />} />
}

export default UserPage
