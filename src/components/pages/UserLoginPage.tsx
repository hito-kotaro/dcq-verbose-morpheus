import React from 'react'
import { Box, styled } from '@mui/material'
import bg from '../../assets/images/bg-user-login-md.jpg'
import TwinTemplate from '../templates/TwinTemplate'
import UserLoginForm from '../organisms/UserLoginForm'

const ImageBox = styled(Box)({
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
})

const UserLoginPage = () => {
  return (
    <TwinTemplate
      leftContent={
        <Box bgcolor="black" sx={{ width: '100%', height: '100%' }}>
          <ImageBox sx={{ width: '100%', height: '100%', opacity: 0.6 }} />
        </Box>
      }
      rightContent={
        <Box sx={{ pt: 10 }}>
          <Box sx={{ width: '60%', mx: 'auto' }}>
            <UserLoginForm />
          </Box>
        </Box>
      }
    />
  )
}

export default UserLoginPage
