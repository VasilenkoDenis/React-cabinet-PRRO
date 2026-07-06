import Typography from '@mui/material/Typography';

import AddTodo from './AddTodo';
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

    const handleAddTodo = (title,description) => {

        const newTodo = {
            _id: Date.now().toString(),
            title,
            description,
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        setTodos([newTodo, ...todos]);
    };

    const handleDeleteTodo = (_id) => {
        const updatedTodos = todos.filter((item) =>{return item._id !== _id});
        setTodos(updatedTodos);
    }

    const handleDoneTodo = (_id) => {

        const updatedTodos = todos.map((item) =>{return item._id === _id
                                                 ? {...item, completed: !item.completed}
                                                 : item});
        setTodos(updatedTodos);
    }

    return (
        <div>
            <Typography>{props.username}</Typography>
            <AddTodo addTodo={handleAddTodo}/>
            {todos.map((item) => {
                return <TodoItem todo={item} 
                                 key={item._id} 
                                 handleDeleteTodo={handleDeleteTodo}
                                 handleDoneTodo={handleDoneTodo}/>
            })}
        </div>
    );
}

export default HomePage;