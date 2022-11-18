import { Box, styled } from '@mui/material'
import React from 'react'
import bg from '../../assets/images/bg-admin-login-md.jpg'
import AdminLoginForm from '../organisms/AdminLoginForm'
import TwinTemplate from '../templates/TwinTemplate'

const ImageBox = styled(Box)({
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
})

const AdminLoginPage = () => {
  return (
    <TwinTemplate
      leftContent={
        <Box sx={{ pt: 10 }}>
          <Box sx={{ width: '60%', mx: 'auto' }}>
            <AdminLoginForm />
          </Box>
        </Box>
      }
      rightContent={
        <Box bgcolor="black" sx={{ width: '100%', height: '100%' }}>
          <ImageBox sx={{ width: '100%', height: '100%', opacity: 0.6 }} />
        </Box>
      }
    />
  )
}

export default AdminLoginPage
