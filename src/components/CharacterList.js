import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      // .get("https://rickandmortyapi.com/api/character/")
      .get("https://rick-api.herokuapp.com/api/character/")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results)
      })
      .catch(error => {
        console.log("Sorry", error);
      });
  }, []);

  return (
    <section className="character-list">
      {characters.map(char => {
          return <CharacterCard name={char.name} status={char.status} species={char.species} gender={char.gender} image={char.image} key={char.id}/>
        })
      }
    </section>
  );
}
