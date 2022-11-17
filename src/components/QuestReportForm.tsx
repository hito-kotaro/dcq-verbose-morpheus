import React, { FC } from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import TextField from '@mui/material/TextField'
import useTextField from '../useTextField'

type Props = {
  onCancel: () => void
}

const QuestReportForm: FC<Props> = (props) => {
  const { onCancel } = props
  const form = useTextField()
  return (
    <>
      <TextField
        onChange={form.onChange}
        value={form.input}
        multiline
        fullWidth
        label="報告内容"
        placeholder="example"
        rows={4}
        variant="standard"
      />
      <ButtonGroup variant="contained" fullWidth sx={{ mt: 2 }}>
        {/* ここのonCickは後ほどApiのアクセスになる */}
        <Button onClick={form.clear}>報告</Button>
        <Button onClick={onCancel} color="secondary" sx={{ width: '100px' }}>
          戻る
        </Button>
      </ButtonGroup>
    </>
  )
}

export default QuestReportForm
