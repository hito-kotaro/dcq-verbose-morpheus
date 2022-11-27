import React, { FC } from 'react'
import { Box, TextField, ButtonGroup, Button } from '@mui/material'
import useTextField from '../generalHooks/useTextField'
import useRequest from './organisms/Request/useRequest'
import { createRequestType } from '../Repositories/types/RequestType'
import { questType } from '../Repositories/types/QuestType'

type Props = {
  quest: questType
  onCancel: () => void
}

const QuestReportForm: FC<Props> = (props) => {
  const { quest, onCancel } = props

  const { post } = useRequest()
  const multiline = 5
  const form = useTextField()

  const report = () => {
    const req: createRequestType = {
      quest_id: quest.id,
      title: `${quest.title}-報告`,
      description: form.input,
    }
    post(req)
    form.clear()
  }
  return (
    <Box>
      <TextField
        onChange={form.onChange}
        value={form.input}
        multiline
        fullWidth
        label="報告内容"
        placeholder="example"
        rows={multiline}
        variant="standard"
      />

      <ButtonGroup variant="contained" fullWidth sx={{ mt: 2 }}>
        {/* ここのonCickは後ほどApiのアクセスになる */}
        <Button onClick={report}>報告</Button>
        <Button onClick={onCancel} color="secondary" sx={{ width: '100px' }}>
          戻る
        </Button>
      </ButtonGroup>
    </Box>
  )
}

export default QuestReportForm
