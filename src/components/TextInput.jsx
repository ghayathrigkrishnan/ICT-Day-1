import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const TextInput = () => {
    var[data,setData]=useState();
    var[output,setOutput]=useState();
    const getName=(e)=>{
        console.log(e.target.value);
        setData(e.target.value);
    };
    const setName=()=>{
         setOutput(data);
    };
  return (
    <div>
      <Typography variant='h3' >WELCOME {output}</Typography><br />
      <TextField variant='outlined' label="username" onChange={getName}></TextField><br /><br />
      <Button variant='contained' onClick={setName}>Get Name</Button>
    </div>
  )
} 

export default TextInput
