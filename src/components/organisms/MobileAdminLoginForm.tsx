import React from 'react'
import { alpha, Box, styled } from '@mui/material'
import bg from '../../assets/images/bg-admin-login-sm.png'
import AdminLoginForm from './AdminLoginForm'

const MobileAdminLoginForm = () => {
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
        <AdminLoginForm />
      </Box>
    </ImageBox>
  )
}

export default MobileAdminLoginForm
