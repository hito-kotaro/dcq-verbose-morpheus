import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { SideMenuData } from '../../../SideMenuData'
import SplitTemplate from '../../templates/SplitTemplate'
import DetailCard from '../../DetailCard'
import CardList from '../../molecules/CardList'
import { quests } from '../../../testData/QuestData'
import QuestReportForm from '../../QuestReportForm'

const Quest = () => {
  const [main, setMain] = useState(<CardList data={[]} />)
  const [sub, setSub] = useState(
    <DetailCard
      title="クエストを選択してください"
      date="date"
      description="クエストを選択してください"
      image="cosmic1"
      point={0}
      forms={<QuestReportForm onCancel={() => console.log('cancel')} />}
    />
  )

  useEffect(() => {
    console.log('Environment!')
    console.log(import.meta.env)
    setMain(<CardList data={quests} />)
  }, [])

  return <SplitTemplate menu={SideMenuData} mainPanel={<Box sx={{ boxShadow: 3 }}>{main}</Box>} subPanel={sub} />
}

export default Quest
