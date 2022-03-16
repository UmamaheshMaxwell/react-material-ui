import {Typography} from '@mui/material'

export const MuiTypography = () => {
  return (
    <>
      <Typography variant='h1'>H1 Header</Typography>
      <Typography variant='h2'>H2 Header</Typography>
      <Typography variant='h3'>H3 Header</Typography>
      <Typography variant='h4' component="h1" gutterBottom>H4 Header</Typography>
      <Typography variant='h5'>H5 Header</Typography>
      <Typography variant='h6'>H6 Header</Typography>

      <Typography variant='subtitle1'>sub title 1 </Typography>
      <Typography variant='subtitle2'>sub title 2</Typography>

      <Typography variant='body1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum fugiat molestias totam eveniet voluptatum at aliquam quidem tempora laboriosam sapiente, doloremque nihil commodi ab minus inventore unde fugit dolore quod.</Typography>
      <Typography variant='body2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum fugiat molestias totam eveniet voluptatum at aliquam quidem tempora laboriosam sapiente, doloremque nihil commodi ab minus inventore unde fugit dolore quod.</Typography>
    </>
  )
}

