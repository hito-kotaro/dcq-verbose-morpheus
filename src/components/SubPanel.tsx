import React from 'react'
import { Box } from '@mui/material'
import DetailCard from './DetailCard'
import QuestReportForm from './QuestReportForm'

const SubPanel = () => {
  return (
    <DetailCard
      title="タイトルA"
      date="Nov,18,2022"
      description="説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入"
      image="cosmic1"
      point={1}
      forms={<QuestReportForm onCancel={() => console.log('cancel')} />}
    />
  )
}

export default SubPanel
