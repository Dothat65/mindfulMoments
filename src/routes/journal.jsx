import React, { useState } from 'react';
import axios from 'axios';
import '../styles/journal.css';

const Journal = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const handleAddTask = () => {
        console.log('handleAddTask called', taskInput);
        if (taskInput.trim() !== '') {
            const newTask = {
                content: taskInput,
            };

            const token = localStorage.getItem('token');

            axios.post('http://localhost:8080/journal', newTask, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                console.log('Journal entry created:', response.data);
                // Update the tasks state to include the new journal entry
                setTasks([...tasks, response.data]);
                setTaskInput('');
            })
            .catch(error => {
                console.error('axios.post error', error);
            });
        }
    };

    const handleDeleteTask = (indexToDelete) => {
        setTasks(tasks.filter((task, index) => index !== indexToDelete));
    };

    return (
        <div className="container">
              <h1>Daily Journals</h1>
            <div className="input-container">
            <textarea id="taskInput" onChange={(e) => setTaskInput(e.target.value)} value={taskInput} placeholder="Write away..."></textarea>
                <button id="addTaskButton" onClick={handleAddTask}>Add Journal</button>
            </div>
            <div id="taskList">
                {tasks.map((task, index) => (
                    <div key={index} className="journal-container">
                        <div className="task">
                            <input type="checkbox" />
                            <div className="journal-text">{task.content}</div>
                            <div className="date">{task.date}</div>
                            <button className = "deleteButton" onClick={() => handleDeleteTask(index)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Journal;