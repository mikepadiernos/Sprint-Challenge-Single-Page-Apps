import React from "react";

export default function CharacterCard(props) {
  const { name, status, species, gender, image } = props;
  return (
    <article className="card">
      <div className="card-header">
        <h2>{name}</h2>
        <img src={image} alt=""/>
      </div>
      <div className="card-body">
        <table>
          <tbody>
            <tr>
              <td>
                Status:
              </td>
              <td>
                {status}
              </td>
            </tr>
            <tr>
              <td>
                Gender:
              </td>
              <td>
                {gender}
              </td>
            </tr>
            <tr>
              <td>
                Species:
              </td>
              <td>
                {species}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}
