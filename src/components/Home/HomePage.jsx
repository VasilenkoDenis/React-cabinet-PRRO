import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TodoItem from './TodoItem';
import { useState } from 'react';

const todo = {
    _id: "asd123asdsa1234ads",
    title: "Завдання 1",
    description: "Опис завдання 1",
    completed: false,
    createdAt: "2023-06-01T12:00:00.000Z",
    updatedAt: "2023-06-01T12:00:00.000Z"
}

function HomePage(props) {

    const [todos, setTodos] = useState([todo]);

    const handleAddTodo = () => {

        const newTodo = {
            _id: Date.now().toString(),
            title: "Нове завдання",
            description: "Опис нового завдання",
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        setTodos([newTodo, ...todos]);
    };

    return (
        <div>
            <Typography>{props.username}</Typography>
            <Button onClick={handleAddTodo}>Додати завдання</Button>
            {todos.map((item) => {
                return <TodoItem todo={item} key={item._id} />
            })}
        </div>
    );
}

export default HomePage;