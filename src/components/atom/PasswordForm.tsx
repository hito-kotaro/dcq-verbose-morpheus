import React, { FC } from 'react'
import LockIcon from '@mui/icons-material/Lock'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { FormControl, InputLabel, Input, InputAdornment, IconButton } from '@mui/material'
import usePasswordForm from './usePasswordForm'
import type { textInputHandler } from '../../useTextField'

type Props = {
  handler: textInputHandler
  onKeyDown: () => void
}
const PasswordForm: FC<Props> = (props) => {
  const { handler, onKeyDown } = props
  const { isShow, toggle } = usePasswordForm()
  return (
    <FormControl variant="standard">
      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
      <Input
        id="standard-adornment-password"
        type={isShow ? 'text' : 'password'}
        value={handler.input}
        onChange={handler.onChange}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.code === 'Enter') {
            onKeyDown()
          }
        }}
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
