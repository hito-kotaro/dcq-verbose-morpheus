import React from 'react'
import useAdminState from '../../../recoil/adminState/useAdminState'
import EmptyState from '../../atoms/EmptyState'
import DetailCard from '../../DetailCard'
import CardFrame from '../../molecules/CardFrame'
import CardList from '../../molecules/CardList'
import HorizonContentsTemplate from '../../templates/HorizonContentsTemplate'
import RequestUpdateForm from './RequestUpdateForm'
import useRequest from './useRequest'

const Request = () => {
  const { list, sub, request, modalState, onClickCancel, onClickUpdate } = useRequest()
  const { isAdmin } = useAdminState()

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

    return <EmptyState />
  }

  return (
    <HorizonContentsTemplate
      title="承認依頼一覧"
      left={<CardList data={list} />}
      right={<CardFrame image="cosmic2">{chComponent()}</CardFrame>}
      modalState={modalState}
      modalContent={<CardFrame image="cosmic2">{chComponent()}</CardFrame>}
    />
  )
}

export default Request
