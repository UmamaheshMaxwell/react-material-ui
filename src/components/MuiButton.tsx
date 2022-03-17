import { Stack, Button} from '@mui/material'


export const MuiButton = () => {
  return (
    <div>
        <Stack spacing={2} direction='row'>
            <Button variant='text'>TEXT</Button>
            <Button variant='contained'>CONTAINED</Button>
            <Button variant='outlined'>OUTLINED</Button>
        </Stack>

    </div>
  )
}
