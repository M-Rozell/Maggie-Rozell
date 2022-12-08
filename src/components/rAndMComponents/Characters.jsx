
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../../css/rAndMBootstrap.css';
import Navbar from "./Navbar";
import LinkComponent from "./LinkComponent";


const Characters = () => {

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10')
            .then(res => res.json())
            .then(data => setCharacter(data))
            .catch(e => alert(e.message))
    }, []); //this stays empty b/c we are only running it once

    return (
        <div id="CharacterApp">
            <div id="CharacterContainer">

                <div className='rAndMCloseBtn '>
                    <LinkComponent />
                </div>

                <Navbar />
                
                <section className="row justify-content-center mt-5 mb-5">
                    <div className="col-md-6">
                        <ul className="list-group">
                            {character.map(character => (
                                <li
                                    key={`character=${character.id}`}
                                    className="list-group-item align-items-center shadow rounded">
                                    <h3>{character.name}</h3>
                                    <div>{character.status}</div>
                                    <Link to={`/characters/${character.id}`} className="btn btn-outline-success m-2">
                                        Full Details
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default Characters;







