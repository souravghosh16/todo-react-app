import { FormControl, Input, InputLabel, Stack, TextField } from '@mui/material'
import React from 'react'

export default function MuiTextComponent() {
  return (
    <Stack spacing={4}>
      <Stack direction={'row'} spacing={2}>
        <TextField label={'Name'} variant='outlined'/>
        <TextField label={'Name'} variant='outlined' size='small' required color={'secondary'} helperText="please make a reuired"/>
        <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input required id="component-simple" defaultValue="Composed TextField" />
      </FormControl>
      </Stack>     
    </Stack>
  )
}
