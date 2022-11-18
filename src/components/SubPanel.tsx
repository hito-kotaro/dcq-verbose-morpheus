import React from 'react'
import { Box } from '@mui/material'
import DetailCard from './DetailCard'
import QuestReportForm from './QuestReportForm'

const SubPanel = () => {
  return (
    <Box alignContent="center" bgcolor="slateblue" flex={2} pt={2} px={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed" width={480} bgcolor="red">
        <DetailCard
          title="タイトルA"
          date="Nov,18,2022"
          description="説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入"
          image="cosmic1"
          point={1}
          forms={<QuestReportForm onCancel={() => console.log('cancel')} />}
        />
      </Box>
    </Box>
  )
}

export default SubPanel
