import React, { FC } from 'react'
import { Box } from '@mui/material'
import CardListItem from '../atoms/CardListItem/CardListItem'
import { CardListItemType } from '../atoms/CardListItem/CardListItemType'

type Props = {
  data: CardListItemType[]
}

const CardList: FC<Props> = (props) => {
  const { data } = props
  return (
    <Box p={2} alignContent="center">
      {data.map((d: CardListItemType) => {
        return (
          <Box key={d.id} sx={{ my: 2 }}>
            <CardListItem card={d} />
          </Box>
        )
      })}
    </Box>
  )
}

export default CardList
