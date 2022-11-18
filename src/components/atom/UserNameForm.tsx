import React from 'react'
import { TextField, InputAdornment } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import useTextField from '../../useTextField'

const UserNameForm = () => {
  const form = useTextField()

  return (
    <TextField
      label="UserName"
      value={form.input}
      onChange={form.onChange}
      InputProps={{
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
