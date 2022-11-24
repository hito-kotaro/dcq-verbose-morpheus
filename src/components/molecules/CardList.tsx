import React, { FC } from 'react'
import { Box, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import CardListItem, { CardListItemType } from '../atoms/CardListItem'
import useAdminState from '../../recoil/adminState/useAdminState'

type Props = {
  data: CardListItemType[]
}

const CardList: FC<Props> = (props) => {
  const { data } = props
  const { isAdmin } = useAdminState()
  return (
    <Box p={2} alignContent="center">
      {data.map((d: CardListItemType) => {
        return (
          <Box key={d.id} sx={{ my: 2 }}>
            <CardListItem card={d} />
          </Box>
        )
      })}
      {/* {isAdmin === true ? (
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      ) : (
        ''
      )} */}
    </Box>
  )
}

export default CardList
