import React, { FC } from 'react'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { useCheckBoxType } from '../../generalHooks/useCheckBox'

type Props = {
  color: string
  label: string
  handler: useCheckBoxType
}

const CheckBoxWithLabel: FC<Props> = (props) => {
  const { color, label, handler } = props
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            color="secondary"
            onChange={(e) => handler.onChange(e)}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />
        }
        label={label}
        sx={{ color }}
      />
    </FormGroup>
  )
}

export default CheckBoxWithLabel
