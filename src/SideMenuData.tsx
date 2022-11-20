import { ReactElement } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import ReviewsIcon from '@mui/icons-material/Reviews'

export type SideMenuDataType = {
  title: string
  icon: ReactElement
}

export const SideMenuData: SideMenuDataType[] = [
  {
    title: 'DashBoard',
    icon: <DashboardIcon />,
  },
  {
    title: 'Quests',
    icon: <AssignmentLateIcon />,
  },
  {
    title: 'Requests',
    icon: <ReviewsIcon />,
  },
  {
    title: 'Penalties',
    icon: <AnnouncementIcon />,
  },
]
