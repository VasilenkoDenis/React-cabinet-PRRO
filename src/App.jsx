import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Stack from '@mui/material/Stack';
import SignUpForm from './components/SignUpForm';

function App() {

  return (
    <Stack sx={{direction:"column", alignItems: "center", justifyContent: "center", mt: 20}} /* выравнивание по центру и отступ сверху */> 
        <SignUpForm/> 
    
    </Stack>
  )
}

export default App
