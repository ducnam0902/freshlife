import { Box, Divider, Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Header'
import Navbar from '../Navbar'
const Layout = () => {
    return (
        <Stack direction={"row"}>
            <Header />
            <Box sx={{ flex: 1 }}>
                <Navbar />
                <Divider />
                <Outlet />
            </Box>
        </Stack >
    )
}

export default Layout