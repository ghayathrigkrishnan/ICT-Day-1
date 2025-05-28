import React, { useState } from 'react'
import { Button,Typography } from '@mui/material'
const StateBasics = () => {
    var [name,setName] = useState("Luttappi");
    const nameChange = ()=>{
        setName("Kuttusan")
    }
  return (
    <div>
      <Typography variant='h3'>Welcome {name}</Typography>
      <Button variant='contained' onClick={nameChange}>Change</Button> &nbsp;
      <Button variant='contained' onClick={()=>{setName("Dagini")}}>Change</Button>
    </div>
  );
}

export default StateBasics
