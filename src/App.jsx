import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function App() {

  return (
    <Stack sx={{direction:"column", alignItems: "center", justifyContent: "center", mt: 20}} /* выравнивание по центру и отступ сверху */> 
      <Typography variant="h3" gutterBottom>
          Вхід у сервіс
        </Typography>
      <Typography variant="h4" gutterBottom>
          Кабінет ПРРО "RetailBox"
        </Typography>
      <Stack spacing={2} sx={{ width: 350, gap: 2 }}   /* ширина 350px */>
        
        <TextField id="outlined-basic" label="Логін" variant="outlined" />   
        <TextField id="outlined-basic" label="Пароль" variant="outlined" type="password"/>
        <Button variant="contained">
          Увійти до системи
        </Button>
      </Stack>
    </Stack>
  )
}

export default App
