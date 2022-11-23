import React, { useState } from 'react'
import { Box } from '@mui/material'
import Quest from '../organisms/Quest/Quest'

const AdminPage = () => {
  const [screen, setScreen] = useState(<Quest />)
  return <Box>{screen}</Box>
}

export default AdminPage
