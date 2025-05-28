import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DataCard = () => {
    var[pro,setPro]=useState([]);
        //useEffect(()=>{},[])
        useEffect(()=>{
            //axios.get("url").then((res)=>{}).catch()
            axios
            .get("https://fakestoreapi.com/products")
            .then((res)=>{
                console.log(res.data);
                setPro(res.data)
            })
            .catch((err) => console.log(err));
        },[]);
  return (
    <div>
      <Grid container spacing={2}>
        {pro.map((val,i)=>{
           return(
            <Grid size={{xs:12 ,sm:6 ,md:4}}>
               <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title={val.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>  
            </Grid>
           )
        })}
      </Grid>
    </div>
  )
}

export default DataCard;
