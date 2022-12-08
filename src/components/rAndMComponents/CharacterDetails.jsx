
import { Link, useParams } from "react-router-dom";
import '../../css/rAndMBootstrap.css';
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import LinkComponent from "./LinkComponent";


const CharacterDetails = () => {

    const { characterid } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${characterid}`)
            .then(res => res.json())
            .then(data => setDetails(data))
            .catch(e => alert(e.message))
    }, [characterid]); //array dependency

    return (
        <div id="filmDetailsApp">
            <div id="filmDetailsContainer">

                <div className='projectsCloseBtn '>
                    <LinkComponent />
                </div>

                <Navbar />
                
                <div className="container mt-5">
                    <div className="row justify-content-center mt-5 mb-5">
                        <div className="col-md-6">
                            <div className="card shadow rounded text-center">
                                <img className="card-top " src={details?.image} alt="Character" />
                                <div className="card-body">
                                    <h4 className="card-title">{details?.name}</h4>
                                    <h6 className="card-subtitle">{details?.species}</h6>
                                    <h6 className="card-subtitle mt-3">Director: {details?.gender}</h6>
                                    <h6 className="card-subtitle mt-1">Producer: {details?.origin[0]}</h6>
                                    
                                    <Link to="/characters" className="btn btn-outline-success mt-4">Go Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CharacterDetails;

