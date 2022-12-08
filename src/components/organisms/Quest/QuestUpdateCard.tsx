import React, { FC } from 'react'
import { Box, CardContent, TextField, Typography } from '@mui/material'
import useTextField from '../../../generalHooks/useTextField'
import TwinButton from '../../atoms/TwinButton'
import { questType, updateQuestType } from '../../../Repositories/types/QuestType'

type Props = {
  // eslint-disable-next-line no-unused-vars
  onClickUpdate: (id: number, req: updateQuestType) => void
  onClickCancel: () => void
  quest: questType
}

const QuestUpdateCard: FC<Props> = (props) => {
  const { onClickUpdate, onClickCancel, quest } = props
  const titleHandler = useTextField(quest.title)
  const descHandler = useTextField(quest.description)
  const egHandler = useTextField(quest.example)
  const pointHandler = useTextField(String(quest.reward))

  const row = 5

  const update = () => {
    const req: updateQuestType = {
      title: titleHandler.input,
      description: descHandler.input,
      example: egHandler.input,
      reward: Number(pointHandler.input),
      status: true,
    }
    onClickUpdate(quest.id, req)
    titleHandler.clear()
    descHandler.clear()
    egHandler.clear()
    pointHandler.clear()
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" color="secondary">
          {quest ? 'クエストを更新' : '新しいクエストを作成'}
        </Typography>
      </Box>

      <CardContent sx={{ p: 2 }}>
        {/* Questタイトル */}
        <Box sx={{ mt: 5 }}>
          <TextField
            label="クエストタイトル"
            onChange={titleHandler.onChange}
            value={titleHandler.input}
            fullWidth
            variant="standard"
          />
        </Box>

        {/* Quest詳細 */}
        <Box sx={{ mt: 5 }}>
          <TextField
            label="クエスト詳細"
            onChange={descHandler.onChange}
            value={descHandler.input}
            fullWidth
            multiline
            rows={row}
            variant="standard"
          />
        </Box>

        {/* Quest報酬 */}
        <Box sx={{ mt: 5 }}>
          <TextField
            label="クエスト報酬"
            type="number"
            fullWidth
            onChange={pointHandler.onChange}
            value={pointHandler.input}
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
        </Box>

        {/* Quest達成報告例 */}
        <Box sx={{ mt: 5 }}>
          <TextField
            label="達成報告例"
            onChange={egHandler.onChange}
            value={egHandler.input}
            fullWidth
            multiline
            rows={row}
            variant="standard"
          />
        </Box>
        <TwinButton leftLabel="更新" leftAction={update} rightLabel="戻る" rightAction={onClickCancel} />
      </CardContent>
    </Box>
  )
}

export default QuestUpdateCard
