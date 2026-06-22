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
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [data, setData] = useState('');
  const [pass, setPass] = useState('');

  console.log(data);

  const handleLogin = () => {

    setIsLoginForm(true);
    // setData(Date.now());
  }

  const handleRegister = () => {

    setIsLoginForm(false);
    // setData(Date.now());
  }

  const handleChangeLogin = (event) => {
  
    setData(event.target.value);
  
  }

  const handleChangePassword = (event) => {

    setPass(event.target.value);

  }

  return (
    <Stack sx={{direction:"column", alignItems: "center", justifyContent: "center", mt: 20}} /* выравнивание по центру и отступ сверху */> 
      { // Вхід
        isLoginForm ?
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography variant="h3" gutterBottom>
            Вхід у сервіс {data}
          </Typography>

          <Typography variant="h4" gutterBottom>
            Кабінет ПРРО "RetailBox"
          </Typography>

          <Stack spacing={2} sx={{ width: 350, gap: 2 }}   /* ширина 350px */>  
            <TextField id="login" label="Логін" variant="outlined" onChange={handleChangeLogin} value={data} />   
            <TextField id="password" label="Пароль" variant="outlined" type="password" onChange={handleChangePassword} value={pass} />
            <Button variant="contained">
               Увійти до системи
            </Button>
            <Typography variant="subtitle1" gutterBottom>
              Немає облікового запису?
            </Typography>
            <Button variant="text" onClick={handleRegister}>
              Зареєструватися
            </Button>
          </Stack>
        </div>
        :
        // Реєстрація
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography variant="h3" gutterBottom>
            Реєстрація у сервісі {data}
          </Typography>

          <Typography variant="h4" gutterBottom>
            Кабінет ПРРО "RetailBox"
          </Typography>

          <Stack spacing={2} sx={{ width: 350, gap: 2 }}   /* ширина 350px */>  
            <TextField id="login" label="Логін" variant="outlined" onChange={handleChangeLogin} value={data} />   
            <TextField id="password" label="Пароль" variant="outlined" type="password" onChange={handleChangePassword} value={pass} />
            <Button variant="contained">
              Реєстрація
            </Button>
             <Typography variant="subtitle1" gutterBottom>
              Вже маєте обліковий запис?
            </Typography>
            <Button variant="text" onClick={handleLogin}>
              Увійти до системи
            </Button>
          </Stack>
        </div>
      }
        
    </Stack>
  )
}

export default App
