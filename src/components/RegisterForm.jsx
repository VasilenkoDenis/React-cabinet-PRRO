import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function RegisterForm(props) {

  const [data, setData] = useState('');
  const [pass, setPass] = useState('');

  const handleChangeLogin = (event) => {
  
    setData(event.target.value);
  
  }

  const handleChangePassword = (event) => {

    setPass(event.target.value);

  }

  return (
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
            <Button variant="text" onClick={props.handleLogin}>
              Увійти до системи
            </Button>
          </Stack>
        </div>
  )
}

export default RegisterForm
