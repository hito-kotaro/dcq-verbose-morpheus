import React, { FC } from 'react'
import { TextField, InputAdornment } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import type { textInputHandler } from '../../useTextField'

type Props = {
  handler: textInputHandler
  onKeyDown: () => void
}

const UserNameForm: FC<Props> = (props) => {
  const { handler, onKeyDown } = props

  return (
    <TextField
      label="UserName"
      value={handler.input}
      onChange={handler.onChange}
      InputProps={{
        onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.code === 'Enter') {
            onKeyDown()
          }
        },
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircleIcon />
          </InputAdornment>
        ),
      }}
      variant="standard"
    />
  )
}

export default UserNameForm
