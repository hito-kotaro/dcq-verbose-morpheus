import React, { FC } from 'react'
import { Box, Typography, CardContent, Stack, TextField } from '@mui/material'
import useTextField from '../../../generalHooks/useTextField'
import { rewardType, updateRewardType } from '../../../Repositories/types/RewardType'
import TwinButton from '../../atoms/TwinButton'

type Props = {
  reward: rewardType
  // eslint-disable-next-line no-unused-vars
  onClickUpdate: (id: number, req: updateRewardType) => void
  onClickCancel: () => void
}

const RewardUpdate: FC<Props> = (props) => {
  const { reward, onClickUpdate, onClickCancel } = props
  const titleHandler = useTextField(reward.title)
  const descHandler = useTextField(reward.description)
  const pointHandler = useTextField(String(reward.point))

  const update = () => {
    const req: updateRewardType = {
      title: titleHandler.input,
      description: descHandler.input,
      point: Number(pointHandler.input),
    }
    onClickUpdate(reward.id, req)
    titleHandler.clear()
    descHandler.clear()
    pointHandler.clear()
  }
  // 詳細入力テキストボックスの行数
  const row = 5

  // 各コンポーネントの余白
  const spacing = 5
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
          <TwinButton leftLabel="更新" leftAction={update} rightLabel="戻る" rightAction={onClickCancel} />
        </Stack>
      </CardContent>
    </Box>
  )
}

export default RewardUpdate
