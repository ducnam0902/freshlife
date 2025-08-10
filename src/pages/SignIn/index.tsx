import logo from "@/assets/Fresh-logo.png";
import { useAppSelector } from "@/redux/hook";
import { supabase } from "@/services/supabaseServices";
import routes from "@/utils/route";
import { Box, Button, Stack, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";

const SignIn = () => {
    const session = useAppSelector(state => state.auth.session);
    const navigate = useNavigate();

    if (session) {
        navigate(routes.home)
    }

    const handleSignIn = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: window.location.origin + '/',
                }
            });
            if (error) {
                throw error;
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box>
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    clipPath: "polygon(0% 0% , 80% 0%, 20% 100%, 0% 100%)",
                    background: "linear-gradient(to right, #4caf50, #edf7ed)",
                }}
            />
            <Stack
                sx={{
                    borderRadius: "20px",
                    padding: 6,
                    position: "absolute",
                    zIndex: 3,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "#fff",
                    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                }}
            >
                <Box sx={{ marginX: 'auto', paddingBottom: 2 }}>

                    <img src={logo} alt="Fresh Life Logo" width={"120px"} />
                </Box>
                <Typography
                    variant="h5"
                    sx={{ textAlign: "center", paddingBottom: 2, fontWeight: "500" }}
                >
                    Sign in Fresh Life
                </Typography>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={handleSignIn}
                    sx={{
                        textTransform: "none",
                        paddingX: 6,
                        paddingY: 1.5,
                        borderRadius: "20px",
                    }}
                    startIcon={<FcGoogle />}
                >
                    Login with Google
                </Button>
            </Stack>
        </Box>
    );
};

export default SignIn;
