import React from 'react'
import { Box, Divider, Stack } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import WarningIcon from '@mui/icons-material/Warning'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'
import ReviewsIcon from '@mui/icons-material/Reviews'
import { yellow, pink } from '@mui/material/colors'
import PointCard from './components/PointCard'

const App = () => {
  return (
    <Box justifyContent="center">
      <Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
          <PointCard
            title="どりかむポイント"
            description="算定期間中に全員で獲得したどりかむポイントの合計です"
            image="cosmic1"
            point={20}
            pointIcon={<FavoriteIcon sx={{ color: pink[500] }} />}
          />
          <PointCard
            title="ペナルティポイント"
            description="算定期間中に全チームに付与されたペナルティポイントの合計です"
            image="cosmic1"
            point={10}
            pointIcon={<WarningIcon sx={{ color: yellow[900] }} />}
          />

          <PointCard
            title="合計ポイント"
            description="算定期間中のどりかむポイントからペナルティポイントを引いた値です"
            image="cosmic1"
            point={20 - 10}
            pointIcon={<FavoriteIcon sx={{ color: pink[500] }} />}
          />
        </Stack>

        <Divider sx={{ my: 1 }} />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
          <PointCard
            title="クエスト数"
            description="現在公開されているクエスト数です"
            image="cosmic1"
            point={5}
            pointIcon={<AssignmentTurnedInIcon sx={{ color: pink[500] }} />}
          />

          <PointCard
            title="ペナルティ数"
            description="現在公開されているペナルティ数です"
            image="cosmic1"
            point={1}
            pointIcon={<WarningIcon sx={{ color: yellow[900] }} />}
          />

          <PointCard
            title="リクエスト数"
            description="承認待ちのリクエスト数です"
            image="cosmic1"
            point={100}
            pointIcon={<ReviewsIcon sx={{ color: pink[500] }} />}
          />
        </Stack>
      </Box>
    </Box>
  )
}

export default App
