import { useAppSelector } from '@/redux/hook';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import moment from 'moment';
const Navbar = () => {
    const today = moment().format("MMM DD, dddd");
    const session = useAppSelector(state => state.auth.session);
    return (
        <Stack direction={'row'} justifyContent={"space-between"} sx={{ paddingX: 4, paddingY: 3 }} >
            <Box>
                <Typography variant={'h5'} sx={{ fontWeight: 500, fontSize: '1.25rem' }}>Welcome Back,  </Typography>
                <Typography variant={'h5'} sx={{ fontWeight: 400, fontSize: '1rem' }}>{today}</Typography>
            </Box>
            <Stack direction={'row'} alignItems={'center'} spacing={3}>
                <Box>
                    <Typography align='right' fontWeight={600} >{session?.fullName}</Typography>
                    <Typography paddingRight={1.2} >{session?.email}</Typography>
                </Box>
                <Avatar
                    alt={session?.fullName ?? ''}
                    src={session?.avatar ?? ''}
                    sx={{ width: 56, height: 56 }}
                />
            </Stack>

        </Stack>
    )
}

export default Navbar