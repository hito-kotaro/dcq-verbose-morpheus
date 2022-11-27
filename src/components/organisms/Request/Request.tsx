import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useAdminState from '../../../recoil/adminState/useAdminState'
import EmptyState from '../../atoms/EmptyState'
import DetailCard from '../../DetailCard'
import CardFrame from '../../molecules/CardFrame'
import CardList from '../../molecules/CardList'
import HorizonContentsTemplate from '../../templates/HorizonContentsTemplate'
import RequestUpdateForm from './RequestUpdateForm'
import useRequest from './useRequest'

const Request = () => {
  const { list, fetch, sub, request, modalState, onClickCancel, onClickUpdate } = useRequest()
  const { isAdmin } = useAdminState()

  // useEffect(() => {
  //   chComponent()
  // }, [sub])

  const chComponent = () => {
    if (sub === 'Detail') {
      return (
        <DetailCard
          title={request.title}
          date={request.created_at}
          description={request.description}
          buttonList={[]}
          point={request.reward}
          forms={
            isAdmin ? (
              <RequestUpdateForm onClickUpdate={onClickUpdate} onCancel={onClickCancel} request={request} />
            ) : undefined
          }
        />
      )
    }
    if (sub === 'Create') {
      return <Box>Create</Box>
    }
    if (sub === 'Update') {
      return <Box>Update</Box>
    }
    if (sub === 'Delete') {
      return <Box>Delete</Box>
    }

    return <EmptyState />
  }

  return (
    <HorizonContentsTemplate
      left={<CardList data={list} />}
      right={<CardFrame image="cosmic2">{chComponent()}</CardFrame>}
      modalState={modalState}
      modalContent={<CardFrame image="cosmic2">{chComponent()}</CardFrame>}
    />
  )
}

export default Request
