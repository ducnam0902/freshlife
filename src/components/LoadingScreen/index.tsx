import { useAppSelector } from '@/redux/hook';
import { Box } from '@mui/material';
import React from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import logo from "@/assets/Fresh-logo.png";
const LoadingScreen = () => {
    const loading = useAppSelector(state => state.loading.isLoading);
    if (loading)
        return (
            <Box sx={{ width: '100%', height: '100vh', backgroundColor: '#fff', position: 'absolute', top: 0, left: 0, zIndex: 999, opacity: '0.8' }}>
                <Box sx={{ zIndex: 2, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Box component='img' src={logo} alt="Fresh Life Logo" width={"120px"} sx={{ zIndex: 2, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    />
                    <PuffLoader
                        color="#AAE2BE"
                        loading={loading}
                        aria-label="Loading Spinner"
                        size={280}
                        speedMultiplier={1}
                    />
                </Box>

            </Box>

        )
}

export default LoadingScreen