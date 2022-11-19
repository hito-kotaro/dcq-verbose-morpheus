/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Box, Stack, Button, Link } from '@mui/material'
import CheckBoxWithLabel from '../atom/CheckBoxWithLabel'
import PasswordForm from '../atom/PasswordForm'
import UserNameForm from '../atom/UserNameForm'
import { ReactComponent as LogoAdminLoginMd } from '../../assets/images/logo-admin-login-md.svg'
import useLogin from '../../useLogin'

const AdminLoginForm = () => {
  const { adminLogin, toUserLoginPage } = useLogin()
  return (
    <Box sx={{ py: 3 }}>
      <Box sx={{ maxHeight: 100, mx: 'auto' }}>
        <LogoAdminLoginMd width="100%" height="100%" />
      </Box>

      {/* input form */}
      <Stack direction="column" spacing={4} sx={{ mt: 5 }}>
        <UserNameForm />
        <PasswordForm />
      </Stack>

      <Stack sx={{ mt: 2 }}>
        <CheckBoxWithLabel color="#FA9900" label="ログイン状態を維持" />
      </Stack>

      <Stack sx={{ mt: 5 }}>
        <Button onClick={adminLogin} variant="contained" color="secondary">
          ログイン
        </Button>
      </Stack>

      <Stack direction="column" spacing={1} sx={{ mt: 5 }}>
        <Link component="button" color="secondary" variant="body2" onClick={toUserLoginPage}>
          一般ユーザでログイン
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
    </Box>
  )
}

export default AdminLoginForm
