import { useAppSelector } from '@/redux/hook'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const session = useAppSelector(state => state.auth.session);
    const loading = useAppSelector(state => state.loading.isLoading);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (!session) {
            navigate('/sign-in', { replace: true });
        }
    }, [session, navigate, loading]);

    return session ? children : null;
}

export default ProtectedRoute