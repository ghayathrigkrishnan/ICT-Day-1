import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const DataTable = () => {
  return (
    <div>
      <TableContainer>
        <Table border='3'>
            <TableHead>
                <TableRow>
                    <TableCell>NAME</TableCell>
                    <TableCell>AGE</TableCell>
                    <TableCell>PLACE</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Ghayathri</TableCell>
                    <TableCell>19</TableCell>
                    <TableCell>Thaikkattussery</TableCell>
                </TableRow>
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DataTable
