import React, { FC } from 'react'
import { Box, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import CardListItem, { CardListItemType } from '../atoms/CardListItem'
import useAdminState from '../../recoil/adminState/useAdminState'
import { SPLIT_FEB_BUTTON_BOTTOM } from '../../libs/LayoutData'

type Props = {
  data: CardListItemType[]
  fab?: boolean | null
  fabAction?: () => void
}

const CardList: FC<Props> = (props) => {
  const { data, fab, fabAction } = props
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
      {fab ? (
        <Box position="fixed" sx={{ bottom: SPLIT_FEB_BUTTON_BOTTOM }}>
          <Fab color="secondary" aria-label="add" onClick={fabAction}>
            <AddIcon />
          </Fab>
        </Box>
      ) : (
        ''
      )}
    </Box>
  )
}

export default CardList
