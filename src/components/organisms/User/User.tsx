import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import UpdateIcon from '@mui/icons-material/Update'
import HorizonContentsTemplate from '../../templates/HorizonContentsTemplate'
import useUser from './useUser'
import { iconButtonType } from '../../molecules/Buttons'
import UserList from './UserList'
import EmptyState from '../../atoms/EmptyState'
import CardFrame from '../../molecules/CardFrame'
import DetailCard from '../../DetailCard'
import UserCreateCard from './UserCreateCard'
import UserUpdateCard from './UserUpdateCard'
import DialogWrapper from '../../molecules/DialogWrapper'

const User = () => {
  const {
    users,
    user,
    modalState,
    dialogState,
    sub,
    post,
    put,
    onClickList,
    onClickCreate,
    onClickCancel,
    onClickUpdate,
    onClickDelete,
  } = useUser()

  const [main, setMain] = useState(
    <UserList
      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
      users={users}
      onClickList={onClickList}
      fab
      fabAction={onClickCreate}
    />
  )

  const buttons: iconButtonType[] = [
    { id: 1, icon: <UpdateIcon />, action: onClickUpdate },
    { id: 2, icon: <DeleteIcon color="error" />, action: () => {} },
  ]

  const chComponetn = () => {
    if (sub === 'Detail') {
      return <DetailCard title={user.name} date="" description="" point={user.point} buttonList={buttons} />
    }

    if (sub === 'Create') {
      return <UserCreateCard onClickCreate={post} onClickCancel={onClickCancel} />
    }

    if (sub === 'Update') {
      return <UserUpdateCard onClickUpdate={put} onClickCancel={onClickCancel} user={user} />
    }
    if (sub === 'Delete') {
      return <Box>Delete</Box>
    }
    return <EmptyState />
  }

  useEffect(() => {
    setMain(
      <UserList
        users={users}
        onClickUpdate={onClickUpdate}
        onClickDelete={onClickDelete}
        onClickList={onClickList}
        fab
        fabAction={onClickCreate}
      />
    )
  }, [users])

  return (
    <>
      <DialogWrapper
        dialogTitle={`${user.name}を削除します`}
        dialogMsg="削除したユーザに関連する情報は元に戻せません"
        handler={dialogState}
        leftAction={dialogState.toggle}
        rightAction={dialogState.toggle}
      />
      <HorizonContentsTemplate
        left={main}
        right={<CardFrame image="cosmic2">{chComponetn()}</CardFrame>}
        modalContent={<CardFrame image="cosmic2">{chComponetn()}</CardFrame>}
        modalState={modalState}
      />
    </>
  )
}

export default User
