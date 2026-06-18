import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function App() {

  const [data, setData] = useState('');
  const [pass, setPass] = useState('');

  console.log(data);

  const handleLogin = () => {

    setData(Date.now());
  }

  const handleChangeLogin = (event) => {
  
    setData(event.target.value);
  
  }

  const handleChangePassword = (event) => {

    setPass(event.target.value);

  }

  return (
    <Stack sx={{direction:"column", alignItems: "center", justifyContent: "center", mt: 20}} /* выравнивание по центру и отступ сверху */> 
      <Typography variant="h3" gutterBottom>
          Вхід у сервіс {data}
        </Typography>
      <Typography variant="h4" gutterBottom>
          Кабінет ПРРО "RetailBox"
        </Typography>
      <Stack spacing={2} sx={{ width: 350, gap: 2 }}   /* ширина 350px */>
        
        <TextField id="login" label="Логін" variant="outlined" onChange={handleChangeLogin} value={data} />   
        <TextField id="password" label="Пароль" variant="outlined" type="password" onChange={handleChangePassword} value={pass} />
        <Button variant="contained" onClick={handleLogin}>
          Увійти до системи
        </Button>
      </Stack>
    </Stack>
  )
}

export default App
