
import React from 'react';
import "../css/TaskModal.css";
import { AiFillCloseCircle } from 'react-icons/ai';
import TaskList from "../components/taskComponents/TaskList";


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