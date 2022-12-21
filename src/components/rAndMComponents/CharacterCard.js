import React from "react";

const CharacterCard = ({ character, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container mt-3">
      <div className="row">

      {character.map((character) => (
        
        <div 
        key={`character=${character.id}`} 
        className=" col-xs-12 col-sm-6 col-xl-4 g-sm-0">
          
          <div className="card d-flex flex-row list-group-item align-items-center shadow rounded text-left cardList">
            <img
              src={character.image}
              className="card-image characterImage"
              alt={character.name}
            />

            <div className="card-body p-0 ml-2 characterCards">
              <h6 className="characterId">#{character.id}</h6>
              <h5>{character.name}</h5>
              <h6>
                {character.status} - {character.species} - {character.gender}
              </h6>
              <p className=" lastLocation">Last Known Location:</p>
              <h6>{character.location.name}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CharacterCard;
