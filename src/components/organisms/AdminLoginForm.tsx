/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Box, Stack, Button, Link } from '@mui/material'
import CheckBoxWithLabel from '../atom/CheckBoxWithLabel'
import PasswordForm from '../atom/PasswordForm'
import UserNameForm from '../atom/UserNameForm'
import { ReactComponent as LogoAdnubLoginMd } from '../../assets/images/logo-admin-login-md.svg'

const AdminLoginForm = () => {
  return (
    <>
      <Box sx={{ maxHeight: 100 }}>
        <LogoAdnubLoginMd width="100%" height="100%" />
      </Box>

      {/* input form */}
      <Stack direction="column" spacing={4} sx={{ mt: 10 }}>
        <UserNameForm />
        <PasswordForm />
      </Stack>

      <Stack sx={{ mt: 2 }}>
        <CheckBoxWithLabel color="#252F3D" label="ログイン状態を維持" />
      </Stack>

      <Stack sx={{ mt: 10 }}>
        <Button variant="contained" color="primary">
          ログイン
        </Button>
      </Stack>

      <Stack direction="column" spacing={1} sx={{ mt: 10 }}>
        <Link
          component="button"
          color="primary"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.")
          }}
        >
          管理者としてログイン
        </Link>

        <Link
          component="button"
          color="primary"
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

export default AdminLoginForm
