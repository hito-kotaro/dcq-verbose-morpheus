import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { SideMenuData } from '../../../SideMenuData'
import SplitTemplate from '../../templates/SplitTemplate'
import DetailCard from '../../DetailCard'
import CardList from '../../molecules/CardList'
import { quests } from '../../../testData/QuestData'
import useQuest from './useQuest'
import QuestReportForm from '../../QuestReportForm'

const Quest = () => {
  const { fetch, pick, list } = useQuest()
  const [main, setMain] = useState(<CardList data={[]} />)
  const [sub, setSub] = useState(
    <DetailCard
      title="クエストを選択してください"
      date="date"
      description="クエストを選択してください"
      image="cosmic1"
      point={0}
    />
  )

  useEffect(() => {
    fetch()
  }, [])

  // pickが変わったらsubSetする
  useEffect(() => {
    setSub(
      <DetailCard
        title={pick.title}
        date={pick.date}
        description={pick.description}
        image="cosmic2"
        point={pick.reward}
        forms={<QuestReportForm onCancel={() => {}} />}
      />
    )
  }, [pick])
  useEffect(() => {
    setMain(<CardList data={list} />)
  }, [list])

  return <SplitTemplate menu={SideMenuData} mainPanel={<Box>{main}</Box>} subPanel={sub} />
}

export default Quest
