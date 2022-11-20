/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Box, Stack, Button, Link } from '@mui/material'
import CheckBoxWithLabel from '../atoms/CheckBoxWithLabel'
import PasswordForm from '../atoms/PasswordForm'
import UserNameForm from '../atoms/UserNameForm'
import { ReactComponent as LogoUserLoginMd } from '../../assets/images/logo-user-login-md.svg'
import useLogin from '../../useLogin'
import LoginForm from '../molecules/LoginForm'

const UserLoginForm = () => {
  const { userLogin, toAdminLoginPage } = useLogin()

  return (
    <Box sx={{ py: 3 }}>
      <Box sx={{ maxHeight: 100, mx: 'auto' }}>
        <LogoUserLoginMd width="100%" height="100%" />
      </Box>

      {/* input form */}
      <LoginForm login={userLogin} />

      <Stack direction="column" spacing={1} sx={{ mt: 5 }}>
        <Link component="button" color="secondary" variant="body2" onClick={toAdminLoginPage}>
          管理者でログイン
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

export default UserLoginForm
