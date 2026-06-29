import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import SignUpForm from './components/SignUpForm';
import HomePage from './components/Home/HomePage';

function App() {

  const [user, setUser] = useState();

  return (
    <Stack sx={{direction:"column", alignItems: "center", justifyContent: "center", mt: 20}} /* выравнивание по центру и отступ сверху */> 
      {  
        user 
        ? <HomePage username={user.name} /> 
        : <SignUpForm setUser={setUser}/> 
      }
    </Stack>
  )
}

export default App
