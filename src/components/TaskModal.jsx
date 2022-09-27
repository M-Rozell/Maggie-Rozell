
import TaskList from "../components/taskComponents/TaskList";
import { AiFillCloseCircle } from 'react-icons/ai';
import "../css/TaskModal.css";
import React from 'react';

function TaskModal({ closeModal, openBtn }) {

    const handleCloseTaskModal = () => {
        closeModal(false)
        openBtn(true)
    };

    return (
        <div className='taskContainer'>
            <div className='taskApp'>

                <div className='taskCloseBtn '>
                    <button onClick={() => handleCloseTaskModal()}><AiFillCloseCircle /></button>
                </div>

                <TaskList />

            </div>
        </div>
    )
};

export default TaskModal;