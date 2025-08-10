import AddTask from '@/components/AddTask';
import HeadingTitle from '@/components/HeadingTitle';
import TaskTable from '@/components/TaskTable';
import { Box, Button, Stack } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react';

const Tasks = () => {
    const [isOpenCreateTaskModal, setIsOpenCreateTaskModal] = useState(false);

    const handleOpenModal = () => {
        setIsOpenCreateTaskModal(true);
    }

    const handleCloseModal = () => {
        setIsOpenCreateTaskModal(false);
    }

    return (
        <Box sx={{ background: '#2d3d2', margin: 4 }}>
            <Stack direction={'row'} justifyContent={'space-between'} sx={{ marginBottom: 4 }}>
                <HeadingTitle title='Tasks' />
                <Stack direction={'row'} spacing={2}>
                    <Button variant="outlined" color="success" sx={{ textTransform: 'none' }} onClick={handleOpenModal}>Add Task</Button>
                    <Button variant="contained" color="success" sx={{ textTransform: 'none' }}>Complete</Button>
                </Stack>
            </Stack>
            <TaskTable />
            <Dialog
                open={isOpenCreateTaskModal}
                onClose={handleCloseModal}
                maxWidth="sm"
            >
                <DialogTitle sx={{ background: "linear-gradient(to right, #38d900, #5ee32f)", color: '#fff' }}>Create new task</DialogTitle>
                <DialogContent sx={{ marginTop: 4, width: '550px' }}>
                    <AddTask onClose={handleCloseModal} />
                </DialogContent>
            </Dialog>
        </Box>
    )
}

export default Tasks