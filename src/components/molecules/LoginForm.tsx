import React, { FC } from 'react'
import { Button, Stack } from '@mui/material'
import PasswordForm from '../atom/PasswordForm'
import UserNameForm from '../atom/UserNameForm'
import useTextField from '../../useTextField'
import CheckBoxWithLabel from '../atom/CheckBoxWithLabel'

type Props = {
  login: (name: string, pwd: string) => void
}

const LoginForm: FC<Props> = (props) => {
  const { login } = props
  const nameHandler = useTextField()
  const pwdHandler = useTextField()

  return (
    <>
      <Stack direction="column" spacing={4} sx={{ mt: 5 }}>
        <UserNameForm handler={nameHandler} onKeyDown={() => login(nameHandler.input, pwdHandler.input)} />
        <PasswordForm handler={pwdHandler} onKeyDown={() => login(nameHandler.input, pwdHandler.input)} />
      </Stack>

      <Stack sx={{ mt: 2 }}>
        <CheckBoxWithLabel color="#FA9900" label="ログイン状態を維持" />
      </Stack>

      <Stack sx={{ mt: 5 }}>
        <Button onClick={() => login(nameHandler.input, pwdHandler.input)} variant="contained" color="secondary">
          ログイン
        </Button>
      </Stack>
    </>
  )
}

export default LoginForm
