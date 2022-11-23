import React, { FC } from 'react'
import { Box, TextField, ButtonGroup, Button } from '@mui/material'

import useTextField from '../generalHooks/useTextField'

type Props = {
  onCancel: () => void
}

const QuestReportForm: FC<Props> = (props) => {
  const { onCancel } = props

  const multiline = 5
  const form = useTextField()
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
        <Button onClick={form.clear}>報告</Button>
        <Button onClick={onCancel} color="secondary" sx={{ width: '100px' }}>
          戻る
        </Button>
      </ButtonGroup>
    </Box>
  )
}

export default QuestReportForm
