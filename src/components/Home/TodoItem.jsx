import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckBox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { useState } from 'react';

function TodoItem(props) {
  const todo = props.todo
 
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(todo.title ||'');
  const [description, setDescription] = useState(todo.description || '');

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
    if (isEdit) {
        props.handleUpdateTodo(todo._id, title, description);
    }
  }

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  }; 

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
 
  const handleDeleteTodo = () => {
    props.handleDeleteTodo(todo._id)
  };
 
  const handleDoneTodo = () => {
    props.handleDoneTodo(todo._id)
  };
   
  return (
    <Card sx={{ minWidth: 275, backgroundColor:todo.completed ? "lightgreen" : undefined}}>
        <CardContent>
            <Stack>
                {isEdit 
                    ? <TextField size="small" label="Заголовок завдання" value={title} onChange={handleChangeTitle} />          
                    :
                    <Typography gutterBottom>
                        {todo.title}
                    </Typography>
                }

                {isEdit 
                    ? <TextField size="small" label="Опис завдання" value={description} onChange={handleChangeDescription} />          
                    :
                    <Typography variant="body2">
                        {todo.description}
                    </Typography>
                }
            </Stack>
        </CardContent>
        <CardActions>
            <CheckBox checked={todo.completed} onChange={handleDoneTodo} />
            <Button size="small" onClick={toggleIsEdit}>
                {isEdit ? "Зберегти" : "Редагувати"}
            </Button>
            <Button size="small" sx={{ backgroundColor: "red", color: "white" }} onClick={handleDeleteTodo}>
                Видалити
            </Button>
        </CardActions>
    </Card>    
  )
}

export default TodoItem
