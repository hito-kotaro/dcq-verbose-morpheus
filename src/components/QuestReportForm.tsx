import React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import TextField from '@mui/material/TextField'

const QuestReportForm = () => {
  return (
    <>
      <TextField
        // inputRef={register}
        multiline
        fullWidth
        label="報告内容"
        placeholder="example"
        rows={4}
        variant="standard"
      />
      <ButtonGroup variant="contained" fullWidth sx={{ mt: 2 }}>
        <Button>報告</Button>
        <Button color="secondary" sx={{ width: '100px' }}>
          戻る
        </Button>
      </ButtonGroup>
    </>
  )
}

export default QuestReportForm
