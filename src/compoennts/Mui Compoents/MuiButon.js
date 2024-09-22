import React, { useState } from 'react'
import { Button, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import FormatUnderlined from '@mui/icons-material/FormatUnderlined';
export default function MuiButon() {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);
  const handleFormatChnage = (event, updatedFormats)=>{
    console.log(updatedFormats)
    setFormats(updatedFormats)
  }
  console.log(formats)
  return (
    <div>        
        <Stack direction={'row'}>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
        </Stack>
        <Stack direction={'row'}>
        <ToggleButtonGroup
          value={formats}
          onChange={handleFormatChnage}
          aria-label="text formatting"
        >
          <ToggleButton value={'bold'} aria-label='bold'><FormatBoldIcon /></ToggleButton>
          <ToggleButton value={'italic'} aria-label='italic' ><FormatItalic /></ToggleButton>
          <ToggleButton value={'underlined'} aria-label='underlined' ><FormatUnderlined /></ToggleButton>
        </ToggleButtonGroup>
        </Stack>
    </div>
  )
}
