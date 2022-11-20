import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Quest from '../organisms/Quest/Quest'

const UserPage = () => {
  const [screen, setScreen] = useState(<Quest />)

  // テンプレートをwrapするだけ
  // stateで表示するテンプレートを切り替える
  // 表示する画面はglobalStateで管理する

  return <Box>{screen}</Box>
}

export default UserPage
