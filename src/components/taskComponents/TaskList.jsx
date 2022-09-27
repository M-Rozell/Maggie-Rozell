
import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import Tasks from './Tasks';

const LOCAL_STORAGE_KEY = 'taskApp.tasks';

function TaskList() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);



  //store Tasks
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks]);

  const addTask = task => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return
    }
    const newTasks = [task, ...tasks]
    setTasks(newTasks);
    console.log(newTasks);
  };

  const updateTask = (taskId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)));
  };

  const removeTask = id => {
    const removeArr = [...tasks].filter(task => task.id !== id)
    setTasks(removeArr)
  };

  const completeTask = id => {
    let updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete
      }
      return task
    })
    setTasks(updatedTasks);
  };

  return (

    <div>
      <h1 className='taskCompiler'>Task Compiler</h1>
      <hr className='horizontalLine' />

      <TaskForm onSubmit={addTask} />

      <Tasks
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        updateTask={updateTask} />

    </div>
  )
};

export default TaskList;


