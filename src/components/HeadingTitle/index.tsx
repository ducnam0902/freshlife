import { Box, Typography } from '@mui/material';
import React from 'react'

interface IHeadingTitle {
    title: string;
}

const HeadingTitle = ({ title }: IHeadingTitle) => {
    return (
        <Box sx={{ borderLeft: '8px solid #38d900', paddingLeft: 2 }}>
            <Typography variant='h4'>{title}</Typography>
        </Box>
    )
}

export default HeadingTitle