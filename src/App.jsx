import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import SignUpForm from './components/SignUpForm';

function App() {

  const [user, setUser] = useState();

  return (
    <Stack sx={{direction:"column", alignItems: "center", justifyContent: "center", mt: 20}} /* выравнивание по центру и отступ сверху */> 
      {  
        user 
        ? <div> {user.name} </div> 
        : <SignUpForm setUser={setUser}/> 
      }
    </Stack>
  )
}

export default App
