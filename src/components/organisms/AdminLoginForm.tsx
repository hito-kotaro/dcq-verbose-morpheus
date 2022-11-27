import React from 'react'
import { Box, Stack, Button } from '@mui/material'
import { ReactComponent as LogoAdminLoginMd } from '../../assets/images/logo-admin-login-md.svg'
import useLogin from '../../Repositories/auth/useLogin'
import LoginForm from '../molecules/LoginForm'

const AdminLoginForm = () => {
  const { adminLogin, toUserLoginPage } = useLogin()
  return (
    <Box sx={{ py: 3 }}>
      <Box sx={{ maxHeight: 100, mx: 'auto' }}>
        <LogoAdminLoginMd width="100%" height="100%" />
      </Box>

      <Box sx={{ height: '30px', width: '100%' }} />

      {/* input form */}
      <LoginForm login={adminLogin} />

      <Stack direction="column" spacing={1} sx={{ mt: 5 }}>
        <Button onClick={toUserLoginPage}>一般ユーザでログイン</Button>
        <Button onClick={() => {}}>パスワードをお忘れですか？</Button>
      </Stack>
    </Box>
  )
}

export default AdminLoginForm
