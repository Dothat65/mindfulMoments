import React, { useState, useEffect } from 'react';
import '../styles/journal.css'; // Importing CSS file

function Journal() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    useEffect(() => {
        const todayDate = new Date();
        const day = todayDate.getDate();
        const month = todayDate.getMonth() + 1;
        const year = todayDate.getFullYear();

        const dateString = `${month}/${day}/${year}`;
        document.getElementById("date").textContent = dateString;
    }, []);

    const handleTaskInputChange = (event) => {
        setTaskInput(event.target.value);
    };

    const handleAddTask = () => {
        if (taskInput.trim() !== '') {
            const todayDate = new Date();
            const day = todayDate.getDate();
            const month = todayDate.getMonth() + 1;
            const year = todayDate.getFullYear();
            const dateString = `${month}/${day}/${year}`;
            
            const newTask = {
                text: taskInput,
                date: dateString
            };
            setTasks([...tasks, newTask]);
            setTaskInput('');
        }
    };

    const handleClearTasks = () => {
        setTasks([]);
    };

    return (
        <div>
            <header>
                <h1>Daily Journals </h1>
                <div id="date"></div>
            </header>

            <main>
                <div className="container">
                    <div className="input-container">
                        <textarea
                            id="taskInput"
                            placeholder="Enter Journal Here...."
                            value={taskInput}
                            onChange={handleTaskInputChange}
                            required
                        ></textarea>
                        <button onClick={handleAddTask}>Add Journal</button>
                    </div>
                    <div id="taskList">
                        {tasks.map((task, index) => (
                            <div key={index} className="journal-container">
                                <div className="task">
                                    <input type="checkbox" />
                                    <div className="journal-text">{task.text}</div>
                                    <div className="date">{task.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleClearTasks}>Clear Tasks</button>
                </div>
            </main>
        </div>
    );
}

export default Journal;
