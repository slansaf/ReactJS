import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Card, CardContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
            <TextField
                label="Новая задача"
                variant="outlined"
                fullWidth
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={addTask} style={{ marginTop: '10px' }}>
                Добавить задачу
            </Button>
            <List style={{ marginTop: '20px' }}>
                {tasks.map((task, index) => (
                    <ListItem key={index} component={Card} style={{ marginBottom: '10px' }}>
                        <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <ListItemText primary={task} />
                            <IconButton edge="end" aria-label="delete" onClick={() => removeTask(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </CardContent>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default TodoList;
