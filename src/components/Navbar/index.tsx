import { Box, Stack, Typography } from '@mui/material';
import moment from 'moment';
const Navbar = () => {
    const today = moment().format("MMM DD, dddd");
    return (
        <Stack direction={'row'} justifyContent={"space-between"} sx={{ paddingX: 4, paddingY: 3 }} >
            <Box>
                <Typography variant={'h5'} sx={{ fontWeight: 500, fontSize: '1.25rem' }}>Welcome Back,  </Typography>
                <Typography variant={'h5'} sx={{ fontWeight: 400, fontSize: '1rem' }}>{today}</Typography>
            </Box>
            <Box>
                <Typography variant={'h5'} sx={{ fontWeight: 400, fontSize: '1rem' }}>{today}</Typography>
            </Box>

        </Stack>
    )
}

export default Navbar