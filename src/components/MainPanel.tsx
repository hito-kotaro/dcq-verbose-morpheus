import React from 'react'
import { Box } from '@mui/material'
import ListItem from './ListItem'

const MainPanel = () => {
  const testData = [
    {
      id: '1',
      title: 'クエストA',
      date: 'Nov,18,2022',
      description: 'ここにクエストの説明が入ります',
      image: 'cosmic1',
      point: 10,
      onClick: () => console.log('click'),
    },
    {
      id: '2',
      title: 'クエストB',
      date: 'Nov,18,2022',
      description: 'ここにクエストの説明が入ります',
      image: 'cosmic1',
      point: 10,
      onClick: () => console.log('click'),
    },
    {
      id: '3',
      title: 'クエストB',
      date: 'Nov,18,2022',
      description: 'ここにクエストの説明が入ります',
      image: 'cosmic1',
      point: 10,
      onClick: () => console.log('click'),
    },
    {
      id: '4',
      title: 'クエストD',
      date: 'Nov,18,2022',
      description: 'ここにクエストの説明が入ります',
      image: 'cosmic1',
      point: 10,
      onClick: () => console.log('click'),
    },
    {
      id: '5',
      title: 'クエストE',
      date: 'Nov,18,2022',
      description: 'ここにクエストの説明が入ります',
      image: 'cosmic1',
      point: 10,
      onClick: () => console.log('click'),
    },
    {
      id: '6',
      title: 'クエストF',
      date: 'Nov,18,2022',
      description: 'ここにクエストの説明が入ります',
      image: 'cosmic1',
      point: 10,
      onClick: () => console.log('click'),
    },
    {
      id: '7',
      title: 'クエストG',
      date: 'Nov,18,2022',
      description: 'ここにクエストの説明が入ります',
      image: 'cosmic1',
      point: 10,
      onClick: () => console.log('click'),
    },
  ]
  return (
    <Box bgcolor="darkorange" flex={2} p={2} alignContent="center">
      {testData.map((d) => {
        return (
          <Box sx={{ my: 2 }}>
            <ListItem
              title={d.title}
              date={d.date}
              description={d.description}
              image={d.image}
              point={d.point}
              onClick={d.onClick}
            />
          </Box>
        )
      })}
    </Box>
  )
}

export default MainPanel