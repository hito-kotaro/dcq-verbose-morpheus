import React from 'react'
import { Box, styled } from '@mui/material'
import bg from '../../assets/images/bg-admin-login-md.jpg'
import AdminLoginForm from '../organisms/AdminLoginForm'
import MobileAdminLoginForm from '../organisms/MobileAdminLoginForm'
import TwinTemplate from '../templates/TwinTemplate'

const ImageBox = styled(Box)({
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
      xsContent={<MobileAdminLoginForm />}
    />
  )
}

export default AdminLoginPage
