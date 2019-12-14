import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(characters);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      // .get("https://rick-api.herokuapp.com/api/character/")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
        setSearchTerm(" ");
      })
      .catch(error => {
        console.log("Sorry", error);
      });
  }, []);

  useEffect(() => {
    const results = characters.filter(item => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.species.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log("Results:", results);

    setSearchResults(results);
  }, [searchTerm]);

  console.log("Characters:", characters);

  return (
    <div>
      <SearchForm setSearchTerm={setSearchTerm} />
      <section className="character-list grid-view">
        {searchResults.map(char => {
            return <CharacterCard name={char.name} status={char.status} species={char.species} gender={char.gender} image={char.image} key={char.id}/>
          })
        }
      </section>
    </div>
  );
}
