import { Box, Typography, CardContent, TextField, Stack } from '@mui/material'
import React, { FC } from 'react'
import useTextField from '../../../generalHooks/useTextField'
import { createRewardType } from '../../../Repositories/types/RewardType'
import TwinButton from '../../atoms/TwinButton'

type Props = {
  // eslint-disable-next-line no-unused-vars
  onClickCreate: (req: createRewardType) => void
  onClickCancel: () => void
}

const RewardCreateCard: FC<Props> = (props) => {
  const { onClickCreate, onClickCancel } = props
  const titleHandler = useTextField()
  const descHandler = useTextField()
  const pointHandler = useTextField()

  // 詳細入力テキストボックスの行数
  const row = 5

  // 各コンポーネントの余白
  const spacing = 5

  const create = () => {
    const req: createRewardType = {
      title: titleHandler.input,
      description: descHandler.input,
      point: Number(pointHandler.input),
    }
    onClickCreate(req)
    titleHandler.clear()
    descHandler.clear()
    pointHandler.clear()
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" color="secondary">
          新しいどりかむリストを作成
        </Typography>
      </Box>

      <CardContent sx={{ p: 2 }}>
        <Stack spacing={spacing}>
          {/* どりかむリストタイトル */}
          <TextField
            label="どりかむリストタイトル"
            onChange={titleHandler.onChange}
            value={titleHandler.input}
            fullWidth
            variant="standard"
          />

          {/* どりかむリスト詳細 */}
          <TextField
            label="どりかむリスト詳細"
            onChange={descHandler.onChange}
            value={descHandler.input}
            fullWidth
            multiline
            rows={row}
            variant="standard"
          />

          {/* どりかむリスト必要ポイント */}
          <TextField
            label="必要ポイント"
            type="number"
            fullWidth
            onChange={pointHandler.onChange}
            value={pointHandler.input}
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
          <TwinButton leftLabel="作成" leftAction={create} rightLabel="戻る" rightAction={onClickCancel} />
        </Stack>
      </CardContent>
    </Box>
  )
}

export default RewardCreateCard
