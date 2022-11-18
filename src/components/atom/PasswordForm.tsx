import React from 'react'
import LockIcon from '@mui/icons-material/Lock'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { FormControl, InputLabel, Input, InputAdornment, IconButton } from '@mui/material'

import useTextField from '../../useTextField'
import usePasswordForm from './usePasswordForm'

const PasswordForm = () => {
  const { isShow, toggle } = usePasswordForm()
  const form = useTextField()
  return (
    <FormControl variant="standard">
      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
      <Input
        id="standard-adornment-password"
        type={isShow ? 'text' : 'password'}
        value={form.input}
        onChange={form.onChange}
        startAdornment={
          <InputAdornment position="start">
            <LockIcon />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={toggle}>
              {isShow ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

export default PasswordForm
