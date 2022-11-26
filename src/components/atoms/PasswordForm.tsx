import React, { FC } from 'react'
import LockIcon from '@mui/icons-material/Lock'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { FormControl, InputLabel, Input, InputAdornment, IconButton } from '@mui/material'
import type { textInputHandler } from '../../generalHooks/useTextField'
import useToggle from '../../generalHooks/useToggle'

type Props = {
  handler: textInputHandler
  onKeyDown: () => void
  label?: string
}

const PasswordForm: FC<Props> = (props) => {
  const { handler, onKeyDown, label } = props
  const { isOpen, toggle } = useToggle()

  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel htmlFor="standard-adornment-password">{label || 'password'}</InputLabel>
      <Input
        id="standard-adornment-password"
        type={isOpen ? 'text' : 'password'}
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
              {isOpen ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

export default PasswordForm
