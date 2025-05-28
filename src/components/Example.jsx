import { Button, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Example = () => {
    var [val,setVal] = useState();

  return (
    <div>
      <Typography variant='h3'>Welcome to {val}</Typography>
      <Button variant='contained'onClick={()=>{setVal("Gallery")}}>Gallery</Button>&nbsp;
      <Button variant='contained' color='secondary' onClick={()=>{setVal("Home")}}>Home</Button>&nbsp;
      <Button variant='contained' color='error' onClick={()=>{setVal("Contact")}}>Contact</Button>
    </div>
  )
}

export default Example
