import React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import TextField from '@mui/material/TextField'
import useTextField from '../useTextField'

const QuestReportForm = () => {
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
        <Button onClick={form.clear}>報告</Button>
        <Button color="secondary" sx={{ width: '100px' }}>
          戻る
        </Button>
      </ButtonGroup>
    </>
  )
}

export default QuestReportForm
