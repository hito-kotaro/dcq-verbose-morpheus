import React from 'react'
import DetailCard from './components/DetailCard'
import QuestReportForm from './components/QuestReportForm'

const App = () => {
  return (
    <DetailCard
      title="タイトル"
      date="sep, 11, 2022 "
      description="詳細の説明を入力します。"
      image="cosmic1"
      point={1}
      onClick={() => console.log('click')}
      forms={<QuestReportForm />}
    />
  )
}

export default App
