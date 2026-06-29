import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useSnackbar } from 'notistack';

function LoginForm(props) {

  const [data, setData] = useState('');
  const [pass, setPass] = useState('');
  const {enqueueSnackbar} = useSnackbar();

  const handleChangeLogin = (event) => {
  
    setData(event.target.value);
  
  }

  const handleChangePassword = (event) => {

    setPass(event.target.value);

  }

  const handleLoginClick = () => {
    // Логіка входу
    if (data === 'admin' && pass === '123') {
        props.setUser({ name: 'Admin' });
        enqueueSnackbar('Ласкаво просимо, ' + data + '!', { variant: 'success' });
      // Виконати логіку входу
    }
    else {
        enqueueSnackbar('Невірний логін або пароль', { variant: 'error' });
    }

  };

  return (
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
            <Button onClick={handleLoginClick} variant="contained">
               Увійти до системи
            </Button>
            <Typography variant="subtitle1" gutterBottom>
              Немає облікового запису?
            </Typography>
            <Button variant="text" onClick={props.handleRegister}>
              Зареєструватися
            </Button>
          </Stack>
        </div>
  )
}

export default LoginForm
