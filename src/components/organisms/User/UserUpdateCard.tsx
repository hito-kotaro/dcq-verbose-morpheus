import React, { FC, useEffect, useState } from 'react'
import { Box, Typography, CardContent, Stack } from '@mui/material'
import useCheckBox from '../../../generalHooks/useCheckBox'
import useTextField from '../../../generalHooks/useTextField'
import useAdminState from '../../../recoil/adminState/useAdminState'
import { updateUserType, userType } from '../../../Repositories/types/UserType'
import CheckBoxWithLabel from '../../atoms/CheckBoxWithLabel'
import PasswordForm from '../../atoms/PasswordForm'
import TwinButton from '../../atoms/TwinButton'
import UserNameForm from '../../atoms/UserNameForm'

type Props = {
  onClickUpdate: (id: number, req: updateUserType) => void
  onClickCancel: () => void
  user: userType
}

const UserUpdateCard: FC<Props> = (props) => {
  const { onClickUpdate, onClickCancel, user } = props
  const [disabled, setDisabled] = useState(true)
  const checkHandler = useCheckBox(user.admin)
  const nameHandler = useTextField(user.name)
  const pwdHandler = useTextField()
  const rePwdHandler = useTextField()
  const { isAdmin } = useAdminState()

  useEffect(() => {
    if (
      nameHandler.input.length > 2 &&
      pwdHandler.input.length > 7 &&
      rePwdHandler.input.length > 7 &&
      pwdHandler.input === rePwdHandler.input
    ) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [pwdHandler.input, rePwdHandler.input])

  const update = () => {
    const req: updateUserType = {
      id: user.id,
      name: nameHandler.input,
      password: pwdHandler.input,
      add_point: 0,
      admin: checkHandler.isCheck,
    }
    onClickUpdate(user.id, req)
    checkHandler.clear()
    nameHandler.clear()
    pwdHandler.clear()
    rePwdHandler.clear()
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" color="secondary">
        ユーザ情報の更新
      </Typography>
      <CardContent>
        <Stack spacing={5} sx={{ mt: 1 }}>
          <UserNameForm label="新しいユーザ名" handler={nameHandler} onKeyDown={() => {}} />
          <PasswordForm label="新しいパスワード" handler={pwdHandler} onKeyDown={() => {}} />
          <PasswordForm label="再入力" handler={rePwdHandler} onKeyDown={() => {}} />
          {isAdmin ? <CheckBoxWithLabel color="seconday" label="管理者として登録する" handler={checkHandler} /> : ''}
          <TwinButton
            leftLabel="作成"
            leftAction={update}
            leftDisabled={disabled}
            rightLabel="戻る"
            rightAction={onClickCancel}
          />
        </Stack>
      </CardContent>
    </Box>
  )
}
export default UserUpdateCard
