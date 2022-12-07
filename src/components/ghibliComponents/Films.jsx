
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../../css/BootstrapGhibli.css';
import Navbar from "./Navbar";
import LinkComponent from "./LinkComponent";


const Films = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://api-ghibli.herokuapp.com/films')
            .then(res => res.json())
            .then(data => setFilms(data))
            .catch(e => alert(e.message))
    }, []); //this stays empty b/c we are only running it once

    return (
        <div id="filmApp">
            <div id="filmContainer">

                <div className='ghibliCloseBtn '>
                    <LinkComponent />
                </div>

                <Navbar />
                <section className="row flimsRow justify-content-center mt-5 mb-5">
                    <div className="col-md-6">
                        <ul className="list-group">
                            {films.map(film => (
                                <li
                                    key={`film=${film.id}`}
                                    className="list-group-item align-items-center shadow rounded">
                                    <h3>{film.title}</h3>
                                    <div>{film.description}</div>
                                    <Link to={`/films/${film.id}`} className="btn btn-outline-success m-2">
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

export default Films;







