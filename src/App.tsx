import { CssBaseline, ThemeProvider } from '@mui/material';
import Router from './components/Router';
import LoadingScreen from './components/LoadingScreen';
import { theme } from './customizeTheme';
import { ToastContainer } from 'react-toastify';
function App() {
  return <main>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoadingScreen />
      <Router />
      <ToastContainer />
    </ThemeProvider>

  </main>;
}

export default App
