import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckBox from '@mui/material/Checkbox';

function TodoItem(props) {
  const todo = props.todo
  const handleDeleteTodo = () => {
    props.handleDeleteTodo(todo._id)
  };
 
  const handleDoneTodo = () => {
    props.handleDoneTodo(todo._id)
  };
   
  return (
    <Card sx={{ minWidth: 275, backgroundColor:todo.completed ? "lightgreen" : undefined}}>
        <CardContent>
            <Typography gutterBottom>
                {todo.title}
            </Typography>
            <Typography variant="body2">
                {todo.description}
            </Typography>
        </CardContent>
        <CardActions>
            <CheckBox checked={todo.completed} onChange={handleDoneTodo} />
            <Button size="small">Редагувати</Button>
            <Button size="small" sx={{ backgroundColor: "red", color: "white" }} onClick={handleDeleteTodo}>
                Видалити
            </Button>
        </CardActions>
    </Card>    
  )
}

export default TodoItem
