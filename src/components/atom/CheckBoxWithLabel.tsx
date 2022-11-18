import React, { FC } from 'react'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

type Props = {
  color: string
  label: string
}

const CheckBoxWithLabel: FC<Props> = (props) => {
  const { color, label } = props
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox color="secondary" sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
        label={label}
        sx={{ color }}
      />
    </FormGroup>
  )
}

export default CheckBoxWithLabel
