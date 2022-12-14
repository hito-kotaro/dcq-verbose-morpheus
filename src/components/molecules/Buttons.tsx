import { ButtonGroup, IconButton } from '@mui/material'
import React, { FC, ReactElement } from 'react'

export type iconButtonType = {
  id: number
  icon: ReactElement
  action: () => void
}

type Props = {
  buttonList: iconButtonType[]
}

const Buttons: FC<Props> = (props) => {
  const { buttonList } = props
  return (
    <ButtonGroup fullWidth sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
      {buttonList.map((b: iconButtonType) => (
        <IconButton key={b.id} onClick={b.action}>
          {b.icon}
        </IconButton>
      ))}
    </ButtonGroup>
  )
}

export default Buttons
