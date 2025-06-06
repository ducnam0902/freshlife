import { supabase } from '@/services/supabaseServices';
import routes from "@/utils/route";
import { lazy, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router";
import Layout from '../Layout';
import { useAppDispatch } from '@/redux/hook';
import { hideLoading } from '@/redux/loading/loading';
import { setSession } from '@/redux/auth/auth';
import ProtectedRoute from '../ProtectedRoute';

const SignIn = lazy(() => import("@/pages/SignIn"))
const Home = lazy(() => import("@/pages/Home"))
const NotFound = lazy(() => import("@/pages/NotFound"))
const Tasks = lazy(() => import("@/pages/Tasks"))

const Router = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getInitialSesson = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        dispatch(setSession(session));
      } catch (error) {
        console.error('Error getting initial session:', error);
      } finally {
        dispatch(hideLoading());
      }
    }

    getInitialSesson();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        dispatch(setSession(newSession));
        dispatch(hideLoading());

      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="*" element={<NotFound />} />
        <Route path="/sign-in" element={<SignIn />} />

        {/* Protected Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path={routes.tasks} element={<ProtectedRoute><Tasks /></ProtectedRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>

  )

};

export default Router;
