import React, { FC, ReactElement } from 'react'
import { Box, CardHeader, Avatar, CardContent, Typography, Stack, Divider, Chip, Button } from '@mui/material'
import { red, pink } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import WarningIcon from '@mui/icons-material/Warning'
import useAdminState from '../../../recoil/adminState/useAdminState'
import Buttons, { iconButtonType } from '../../molecules/Buttons'

type Props = {
  authorizer: string
  authComment: string
  status: string
  qTitle: string
  qDescription: string
  qPoint: number
  applicant: string
  rTitle: string
  rDescription: string
  rCreatedAt: string
  rUpdatedAt: string
  buttonList: iconButtonType[]
  penalty?: boolean
  onClickRequest: () => void
}

const HistoryDetail: FC<Props> = (props) => {
  const {
    authorizer,
    authComment,
    applicant,
    status,
    qTitle,
    qDescription,
    qPoint,
    rTitle,
    rDescription,
    buttonList,
    penalty,
    rCreatedAt,
    rUpdatedAt,
    onClickRequest,
  } = props
  const { isAdmin } = useAdminState()

  const colorSelector = () => {
    if (status === 'approve') {
      return 'success'
    }
    if (status === 'reject') {
      return 'error'
    }
    if (status === 'cancel') {
      return 'warning'
    }
    return 'success'
  }

  return (
    <Box sx={{ p: 3 }}>
      {isAdmin === true ? <Buttons buttonList={buttonList} /> : ''}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            TK
          </Avatar>
        }
        title={qTitle}
      />
      <CardContent sx={{ p: 2 }}>
        <Box>
          <Typography variant="body2" color="text.secondary">
            {qDescription}
          </Typography>
        </Box>
        <Stack direction="row" spacing={0} sx={{ justifyContent: 'right' }}>
          {penalty ? <WarningIcon sx={{ color: pink[500] }} /> : <FavoriteIcon sx={{ color: pink[500] }} />}
          <Typography gutterBottom component="div">
            {`x ${qPoint}`}
          </Typography>
        </Stack>
      </CardContent>
      <Divider sx={{ my: 3 }} />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            TK
          </Avatar>
        }
        title={applicant}
        subheader={rCreatedAt}
      />
      <CardContent sx={{ p: 2 }}>
        <Stack spacing={2}>
          <Typography variant="h6">{rTitle}</Typography>
          <Box>
            <Typography variant="body2" color="text.secondary">
              {rDescription}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
      <Divider sx={{ my: 3 }} />
      {status === 'open' ? (
        <Button onClick={onClickRequest}>Request画面へ</Button>
      ) : (
        <>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                TK
              </Avatar>
            }
            title={authorizer}
            subheader={rUpdatedAt}
          />
          <CardContent sx={{ p: 2 }}>
            <Stack spacing={2}>
              <Box>
                <Chip label={status} color={colorSelector()} />
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {authComment}
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </>
      )}
    </Box>
  )
}

export default HistoryDetail
