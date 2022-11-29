import React from 'react'
import { Box, styled, alpha } from '@mui/material'
import bg from '../../assets/images/bg-user-login-sm.png'
import UserLoginForm from './UserLoginForm'

const MobileUserLoginForm = () => {
  const ImageBox = styled(Box)({
    backgroundImage: `url(${bg})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  })
  return (
    <ImageBox sx={{ width: '100%', pt: 5 }}>
      <Box
        bgcolor={alpha('#FFFFFF', 0.8)}
        sx={{ width: '80%', mx: 'auto', mt: 3, px: 2, borderRadius: '20px', backdropFilter: 'blur(3px)' }}
      >
        <UserLoginForm />
      </Box>
    </ImageBox>
  )
}

export default MobileUserLoginForm
