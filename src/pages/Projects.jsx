
import '../css/Projects.css';
import '../css/BootstrapGhibli.css';
import React, { useState } from 'react';
import TTTModal from '../components/TTTModal';
import { useNavigate } from 'react-router-dom';
import TaskModal from '../components/TaskModal';
import WeatherModal from '../components/WeatherModal';


const Projects = () => {

  const navigate = useNavigate();
  const [tttmodal, setTTTModal] = useState(false);
  const [task, setTask] = useState(false);
  const [weatherBtn, setWeatherBtn] = useState(false);
  const [btn, setBtn] = useState(true);

  const navigateToGhibliHome = () => {
    navigate('/GhibliHome');
  };

  const handleTTTBtn = () => {
    setTTTModal(true)
    setBtn(false)
  };

  const handleTaskBtn = () => {
    setTask(true)
    setBtn(false)
  };

  const handleWeatherBtn = () => {
    setWeatherBtn(true)
    setBtn(false)
  };


  return (

    <div className='projectsContainer' id='Projects'>

      <div className='projectsTitle'>PROJECTS</div>

      

        <div className='projectsBtns'>
          {btn && <button className='tttBtn' onClick={() => { handleTTTBtn() }}>Tic Tac Toe</button>}
          {btn && <button className='taskBtn' onClick={() => { handleTaskBtn() }}>Task Compiler</button>}
          {btn && <button className='weatherBtn' onClick={() => { handleWeatherBtn() }}>Weather App</button>}
          {btn && <button className='bootstrapBtn' onClick={navigateToGhibliHome}>Bootstrap Ghibli</button>}
        </div>
<div className='projectsModalContent'>
        <div className='projectModals'>
          {tttmodal && <TTTModal closeModal={setTTTModal} openBtn={setBtn} />}
          {task && <TaskModal closeModal={setTask} openBtn={setBtn} />}
          {weatherBtn && <WeatherModal closeModal={setWeatherBtn} openBtn={setBtn} />}
        </div>
      </div>
    </div>
  )
};

export default Projects;