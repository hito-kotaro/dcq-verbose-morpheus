import React, { useState, FC, useEffect } from 'react'
import { Box, CardContent, Stack, Typography } from '@mui/material'
import useTextField from '../../../generalHooks/useTextField'
import { createUserType } from '../../../Repositories/types/UserType'
import PasswordForm from '../../atoms/PasswordForm'
import TwinButton from '../../atoms/TwinButton'
import UserNameForm from '../../atoms/UserNameForm'
import CheckBoxWithLabel from '../../atoms/CheckBoxWithLabel'
import useCheckBox from '../../../generalHooks/useCheckBox'

type Props = {
  // eslint-disable-next-line no-unused-vars
  onClickCreate: (req: createUserType) => void
  onClickCancel: () => void
}

const UserCreateCard: FC<Props> = (props) => {
  const [disabled, setDisabled] = useState(true)
  const checkHandler = useCheckBox()
  const nameHandler = useTextField()
  const pwdHandler = useTextField()
  const rePwdHandler = useTextField()
  const { onClickCreate, onClickCancel } = props

  // 作成ユーザのチェック
  useEffect(() => {
    if (
      nameHandler.input.length > 5 &&
      pwdHandler.input.length > 7 &&
      rePwdHandler.input.length > 7 &&
      pwdHandler.input === rePwdHandler.input
    ) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [pwdHandler.input, rePwdHandler.input])

  const create = () => {
    const req: createUserType = {
      name: nameHandler.input,
      password: pwdHandler.input,
      admin: checkHandler.isCheck,
    }
    onClickCreate(req)
    checkHandler.clear()
    nameHandler.clear()
    pwdHandler.clear()
    rePwdHandler.clear()
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" color="secondary">
        新しいユーザを作成
      </Typography>
      <CardContent>
        <Stack spacing={5} sx={{ mt: 1 }}>
          <UserNameForm label="新しいユーザ名" handler={nameHandler} onKeyDown={() => {}} />
          <PasswordForm label="新しいパスワード" handler={pwdHandler} onKeyDown={() => {}} />
          <PasswordForm label="再入力" handler={rePwdHandler} onKeyDown={() => {}} />
          <CheckBoxWithLabel color="seconday" label="管理者として登録する" handler={checkHandler} />
          <TwinButton
            leftLabel="作成"
            leftAction={create}
            leftDisabled={disabled}
            rightLabel="戻る"
            rightAction={onClickCancel}
          />
        </Stack>
      </CardContent>
    </Box>
  )
}

export default UserCreateCard
