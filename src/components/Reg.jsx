import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Reg = () => {
  return (
    <div className='box'>
      <Typography variant='h2'>REGISTERATION FORM</Typography>
      <TextField variant='outlined' label='Name'/><br /><br />
      <TextField variant='outlined' label='Department'/><br /><br />
      <TextField variant='outlined' label='Age'/><br /><br />
      <TextField variant='outlined' label='Username'/><br /><br />
      <TextField variant='outlined' label='Password' type='password'/><br /><br /><br />
      <Button variant='contained'>SUBMIT</Button>
    </div>
  )
}

export default Reg
