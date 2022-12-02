import React, { FC } from 'react'
import { Box, TextField, Tooltip } from '@mui/material'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import useTextField from '../../../generalHooks/useTextField'
import { requestType, updateRequestType } from '../../../Repositories/types/RequestType'
import Buttons, { iconButtonType } from '../../molecules/Buttons'

type Props = {
  request: requestType
  onCancel: () => void
  // eslint-disable-next-line no-unused-vars
  onClickUpdate: (id: number, req: updateRequestType) => void
}

const RequestUpdateForm: FC<Props> = (props) => {
  const { request, onCancel, onClickUpdate } = props
  const form = useTextField()
  const multiline = 5

  const update = (status: string) => {
    const req: updateRequestType = {
      auth_comment: form.input,
      status,
    }

    onClickUpdate(request.id, req)
    form.clear()
    onCancel()
  }

  const buttons: iconButtonType[] = [
    {
      id: 1,
      icon: (
        <Tooltip title="承認">
          <CheckCircleIcon fontSize="large" color="secondary" />
        </Tooltip>
      ),
      action: () => update('approved'),
    },
    {
      id: 2,
      icon: (
        <Tooltip title="却下">
          <RemoveCircleIcon fontSize="large" color="error" />
        </Tooltip>
      ),
      action: () => update('rejected'),
    },
  ]

  return (
    <Box>
      <TextField
        onChange={form.onChange}
        value={form.input}
        multiline
        fullWidth
        label="承認者コメント(任意)"
        rows={multiline}
        variant="standard"
      />
      <Box>
        <Buttons buttonList={buttons} />
      </Box>
    </Box>
  )
}

export default RequestUpdateForm
