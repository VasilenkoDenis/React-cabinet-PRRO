import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CheckBox } from '@mui/icons-material';

function TodoItem(props) {
  const todo = props.todo;  
  return (
    <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography gutterBottom>
                {todo.title}
            </Typography>
            <Typography variant="body2">
                {todo.description}
            </Typography>
        </CardContent>
        <CardActions>
            <CheckBox checked={todo.completed} />
            <Button size="small">Редагувати</Button>
            <Button size="small" sx={{ backgroundColor: "red", color: "white" }}>
                Видалити
            </Button>
        </CardActions>
    </Card>    
  )
}

export default TodoItem
