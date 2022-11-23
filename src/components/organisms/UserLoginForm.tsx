import React from 'react'
import { Box, Stack, Button } from '@mui/material'
import { ReactComponent as LogoUserLoginMd } from '../../assets/images/logo-user-login-md.svg'
import useLogin from '../../Repositories/auth/useLogin'
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
        <Button onClick={toAdminLoginPage}>管理者ユーザでログイン</Button>
        <Button onClick={() => {}}>パスワードをお忘れですか？</Button>
      </Stack>
    </Box>
  )
}

export default UserLoginForm
