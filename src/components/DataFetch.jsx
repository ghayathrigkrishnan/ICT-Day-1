import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DataFetch = () => {
    var[users,setUsers]=useState([]);
    //useEffect(()=>{},[])
    useEffect(()=>{
        //axios.get("url").then((res)=>{}).catch()
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res.data);
            setUsers(res.data)
        })
        .catch((err) => console.log(err));
    },[]);
  return (
    <div>
      <TableContainer sx={{border:3}}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>NAME</TableCell>
                     <TableCell>USERNAME</TableCell>
                      <TableCell>EMAIL</TableCell>
                       <TableCell>CITY</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((val,i)=>{
                    return(
                        <TableRow key={i}>
                            <TableCell>{val.name}</TableCell>
                             <TableCell>{val.username}</TableCell>
                              <TableCell>{val.email}</TableCell>
                               <TableCell>{val.address.city}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DataFetch
