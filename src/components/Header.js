import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../styles/Navigation"
export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Nav>
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
      </Nav>
    </header>
  );
}
