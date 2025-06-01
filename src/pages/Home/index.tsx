import { removeSession } from '@/redux/auth/auth'
import { useAppDispatch } from '@/redux/hook'
import { showLoading } from '@/redux/loading/loading'
import { supabase } from '@/services/supabaseServices'
import routes from '@/utils/route'
import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleSignOut = async () => {
        dispatch(showLoading());
        await supabase.auth.signOut();
        dispatch(removeSession());
        navigate(routes.signIn, {
            replace: true
        })
    }
    return (
        <div>
            <Button onClick={handleSignOut}>Logout</Button>
        </div>
    )
}

export default Home