import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          {/*<li>*/}
          {/*  <Link to="/locations">Locations</Link>*/}
          {/*</li>*/}
        </ul>
      </nav>
    </header>
  );
}
