import React, { FC, ReactElement } from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import CardContent from '@mui/material/CardContent'
import styled from '@mui/material/styles/styled'

type Props = {
  title: string
  description: string
  image: string
  point: number
  pointIcon: ReactElement
}

const ListItemContent = styled(CardContent)({
  paddingTop: 1,
  '&:last-child': {
    paddingBottom: 0,
  },
})

const PointCard: FC<Props> = (props) => {
  const { title, description, image, point, pointIcon } = props
  return (
    <Card sx={{ width: 345, minWidth: 256, display: { xs: 'flex', sm: 'block' } }}>
      <CardMedia
        sx={{ width: { xs: 150, sm: '100%' } }}
        component="img"
        height="70"
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        image={`${process.env.PUBLIC_URL!}/img/${image}.jpg`}
        alt="green iguana"
      />

      <ListItemContent sx={{ display: 'block', ml: 'auto' }}>
        <Typography sx={{ typography: { xs: 'body1', sm: 'h6' } }} color="text.secondary">
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ display: { xs: 'none', sm: 'block' } }}>
          {description}
        </Typography>

        <Stack direction="row" spacing={0} sx={{ justifyContent: 'right', mt: { xs: 1 } }}>
          {pointIcon}
          <Typography gutterBottom component="div">
            {`x ${point}`}
          </Typography>
        </Stack>
      </ListItemContent>
    </Card>
  )
}
export default PointCard
