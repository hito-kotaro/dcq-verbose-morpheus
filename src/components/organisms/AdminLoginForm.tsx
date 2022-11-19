/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Box, Stack, Link } from '@mui/material'
import { ReactComponent as LogoAdminLoginMd } from '../../assets/images/logo-admin-login-md.svg'
import useLogin from '../../useLogin'
import LoginForm from '../molecules/LoginForm'

const AdminLoginForm = () => {
  const { adminLogin, toUserLoginPage } = useLogin()
  return (
    <Box sx={{ py: 3 }}>
      <Box sx={{ maxHeight: 100, mx: 'auto' }}>
        <LogoAdminLoginMd width="100%" height="100%" />
      </Box>

      {/* input form */}
      <LoginForm login={adminLogin} />

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
