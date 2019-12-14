import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList({characters, setSearchTerm, }) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(characters);

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

  useEffect(() => {
    const results = characters.filter(item => {
      return item.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log(characters);

    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <SearchForm setSearchTerm={setSearchTerm} />
      <section className="character-list grid-view">
        {characters.map(char => {
            return <CharacterCard name={char.name} status={char.status} species={char.species} gender={char.gender} image={char.image} key={char.id}/>
          })
        }
      </section>
    </div>
  );
}
