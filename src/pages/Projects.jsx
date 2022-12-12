
import '../css/Projects.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, Suspense } from 'react';

const TTTModal = React.lazy(() => import("../components/TTTModal"))
const TaskModal = React.lazy(() => import("../components/TaskModal"))
const WeatherModal = React.lazy(() => import("../components/WeatherModal"))





const Projects = () => {

  const navigate = useNavigate();
  const [tttmodal, setTTTModal] = useState(false);
  const [task, setTask] = useState(false);
  const [weatherBtn, setWeatherBtn] = useState(false);
  const [btn, setBtn] = useState(true);

  const navigateToBootstrapHome = () => {
    navigate('/RandMHome');
  };

  const handleTTTBtn = () => {
    setTTTModal(true);
    setBtn(false);
  };

  const handleTaskBtn = () => {
    setTask(true);
    setBtn(false);
  };

  const handleWeatherBtn = () => {
    setWeatherBtn(true);
    setBtn(false);
  };


  return (

    <div className='projectsContainer' id='Projects'>

      <h1 className='projectsTitle'>PROJECTS</h1>



      <div className='projectsBtns'>
        {btn && <button className='tttBtn' onClick={() => { handleTTTBtn() }}>Tic Tac Toe</button>}
        {btn && <button className='taskBtn' onClick={() => { handleTaskBtn() }}>Task Compiler</button>}
        {btn && <button className='weatherBtn' onClick={() => { handleWeatherBtn() }}>Weather App</button>}
        {/* {btn && <button className='bootstrapBtn' onClick={navigateToBootstrapHome}>Bootstrap</button>} */}
      </div>
      
      <div className='projectsModalContent'>
        <div className='projectModals'>

          {tttmodal && (
            <Suspense fallback={<p>Loading...</p>}>
              <TTTModal closeModal={setTTTModal} openBtn={setBtn} />
            </Suspense>)}

          {task && (
            <Suspense fallback={<p>Loading...</p>}>
              <TaskModal closeModal={setTask} openBtn={setBtn} />
            </Suspense>)}

          {weatherBtn && (
            <Suspense fallback={<p>Loading...</p>}>
              <WeatherModal closeModal={setWeatherBtn} openBtn={setBtn} /></Suspense>)}

        </div>
      </div>
    </div>
  )
};

export default Projects;