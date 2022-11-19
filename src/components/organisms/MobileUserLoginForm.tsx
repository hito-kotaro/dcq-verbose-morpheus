import React from 'react'
import { Box, styled, alpha } from '@mui/material'
import { grey } from '@mui/material/colors'
import bg from '../../assets/images/bg-user-login-sm.png'
import UserLoginPage from '../pages/UserLoginPage'

const MobileUserLoginForm = () => {
  const ImageBox = styled(Box)({
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    backgroundImage: `url(${bg})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  })
  return (
    <ImageBox sx={{ width: '100%', pt: 5 }}>
      <Box
        bgcolor={alpha(grey[50], 0.5)}
        sx={{ width: '80%', mx: 'auto', mt: 5, borderRadius: '20px', backdropFilter: 'blur(3px)' }}
      >
        <UserLoginPage />
      </Box>
    </ImageBox>
  )
}

export default MobileUserLoginForm
