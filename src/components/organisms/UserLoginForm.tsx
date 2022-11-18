/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Box, Stack, Button, Link } from '@mui/material'
import CheckBoxWithLabel from '../atom/CheckBoxWithLabel'
import PasswordForm from '../atom/PasswordForm'
import UserNameForm from '../atom/UserNameForm'
import { ReactComponent as LogoUserLoginMd } from '../../assets/images/logo-user-login-md.svg'

const UserLoginForm = () => {
  return (
    <>
      <Box sx={{ maxHeight: 100, mx: 'auto' }}>
        <LogoUserLoginMd width="100%" height="100%" />
      </Box>

      {/* input form */}
      <Stack direction="column" spacing={4} sx={{ mt: 10 }}>
        <UserNameForm />
        <PasswordForm />
      </Stack>

      <Stack sx={{ mt: 2 }}>
        <CheckBoxWithLabel color="#6F7073" label="ログイン状態を維持" />
      </Stack>

      <Stack sx={{ mt: 10 }}>
        <Button variant="contained" color="secondary">
          ログイン
        </Button>
      </Stack>

      <Stack direction="column" spacing={1} sx={{ mt: 10 }}>
        <Link
          component="button"
          color="secondary"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.")
          }}
        >
          管理者としてログイン
        </Link>

        <Link
          component="button"
          color="secondary"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.")
          }}
        >
          パスワードをお忘れですか
        </Link>
      </Stack>
    </>
  )
}

export default UserLoginForm
