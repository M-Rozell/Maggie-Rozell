

import { useState, useEffect } from "react";
import '../../css/rAndMBootstrap.css';
import CharacterCard from "./CharacterCard";
import Pagination from "./Pagination";



const Character = () => {

    const [character, setCharacter] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage, setCharactersPerPage] = useState(6);

    const [loading, setLoading] = useState(false)


    useEffect(() => {
        fetchData("https://rickandmortyapi.com/api/character");
    }, []);

    const fetchData = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setCharacter((_character) => {
            return [..._character, ...data.results];
        });
        setLoading(false)
        if (data.info && data.info.next) {
            fetchData(data.info.next);
        }
    }


    //get index of last character
    const indexOfLastCharacter = currentPage * charactersPerPage; //current page multiplied by characters per page.
    //index of first character
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage //index of the last character and subtract characters per page.
    //current characters
    const currentCharacter = character.slice(indexOfFirstCharacter, indexOfLastCharacter); //slice out the number of characters we want.

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <>

            <div className="renderedCard">
                <CharacterCard
                    character={currentCharacter}
                    loading={loading} />
            </div>

            <div>
                <Pagination
                    charactersPerPage={charactersPerPage}
                    setCharactersPerPage={setCharactersPerPage}
                    totalCharacters={character.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />
            </div>
        </>
    )
};

export default Character;







