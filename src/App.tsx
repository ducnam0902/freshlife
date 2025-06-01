import { CssBaseline } from '@mui/material';
import Router from './components/Router';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return <main>
    <CssBaseline />
    <LoadingScreen />
    <Router />
  </main>;
}

export default App
