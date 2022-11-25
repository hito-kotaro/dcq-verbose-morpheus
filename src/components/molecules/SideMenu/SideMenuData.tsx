import { ReactElement } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import ReviewsIcon from '@mui/icons-material/Reviews'

export type SideMenuDataType = {
  id: number
  title: string
  icon: ReactElement
}

export const SideMenuData: SideMenuDataType[] = [
  {
    id: 1,
    title: 'DashBoard',
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    title: 'Quests',
    icon: <AssignmentLateIcon />,
  },
  {
    id: 3,
    title: 'Requests',
    icon: <ReviewsIcon />,
  },
  {
    id: 4,
    title: 'Penalties',
    icon: <AnnouncementIcon />,
  },
]
