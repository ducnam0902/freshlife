import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import { supabase } from '@/services/supabaseServices';


const TaskTable = () => {


    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead sx={{ backgroundColor: '#f7f6f7', color: 'white' }}>
                    <TableRow>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center" >Type</TableCell>
                        <TableCell align="center" size='small'>Priority</TableCell>
                        <TableCell align="left" size='medium'>Task Name</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        key={1}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                checked={false}
                            />
                        </TableCell>
                        <TableCell align="center" sx={{ width: '150px' }}>{2}</TableCell>
                        <TableCell align="center" sx={{ width: '100px' }}>{3}</TableCell>
                        <TableCell align="left">{5}</TableCell>
                        <TableCell align="center">{7}</TableCell>

                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TaskTable