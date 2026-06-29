import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CheckBox } from '@mui/icons-material';

function HomePage(props) {

    const todo = {

        _id: "asd123asdsa1234ads",
        title: "Завдання 1",
        description: "Опис завдання 1",
        completed: false,
        createdAt: "2023-06-01T12:00:00.000Z",
        updatedAt: "2023-06-01T12:00:00.000Z"
    }

    return (
        <div>
            <Typography>{props.username}</Typography>
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
        </div>
    );
}

export default HomePage;