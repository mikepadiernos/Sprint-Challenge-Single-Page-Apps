import React, { useState } from "react";
import {SearchLabel} from "../styles/Search"

export default function SearchForm({ setSearchTerm }) {

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="search-form">
     {/*// Add a search form here*/}
      <form>
        <SearchLabel htmlFor="search" >Search</SearchLabel>
        <input type="text" id="search" name="search" placeholder="Search" onChange={handleChange} />
      </form>
    </section>
  );
}
