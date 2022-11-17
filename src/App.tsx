import React from 'react'
import DetailCard from './components/DetailCard'
import QuestReportForm from './components/QuestReportForm'

const App = () => {
  const onCancel = () => console.log('cancel')
  return (
    <DetailCard
      title="タイトル"
      date="sep, 11, 2022 "
      description="詳細の説明を入力します。"
      image="cosmic1"
      point={1}
      forms={<QuestReportForm onCancel={onCancel} />}
    />
  )
}

export default App
