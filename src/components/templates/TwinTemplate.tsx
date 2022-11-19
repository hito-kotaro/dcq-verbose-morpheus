/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { FC, ReactElement } from 'react'
import { Box, Stack, styled, alpha } from '@mui/material'
import { grey } from '@mui/material/colors'
import bg from '../../assets/images/bg-user-login-sm.png'

type Props = {
  leftContent: ReactElement
  rightContent: ReactElement
}

const ImageBox = styled(Box)({
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  backgroundImage: `url(${bg})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
})

const TwinTemplate: FC<Props> = (props) => {
  const { leftContent, rightContent } = props
  return (
    <Box sx={{ height: '100vh' }}>
      <Stack direction="row" justifyContent="space-between" sx={{ height: '100%' }}>
        {/* mobile */}
        <Box bgcolor="black" sx={{ width: '100%', display: { xs: 'block', md: 'none' } }}>
          {/* FixMe: ここをコンポーネントにするとレンダリングできなくなる */}
          <ImageBox sx={{ width: '100%', pt: 5 }}>
            <Box
              bgcolor={alpha(grey[300], 0.7)}
              sx={{ width: '80%', mx: 'auto', mt: 5, borderRadius: '20px', backdropFilter: 'blur(3px)' }}
            >
              {rightContent}
            </Box>
          </ImageBox>
        </Box>

        {/* left side */}
        <Box sx={{ width: '50%', display: { xs: 'none', sm: 'none', md: 'block' } }}>{leftContent}</Box>
        {/* right side */}
        <Box sx={{ width: '50%', display: { xs: 'none', sm: 'none', md: 'block' } }}>{rightContent}</Box>
      </Stack>
    </Box>
  )
}

export default TwinTemplate
