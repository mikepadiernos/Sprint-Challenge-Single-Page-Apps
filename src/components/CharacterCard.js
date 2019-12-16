import React from "react";
import { Card } from "../styles/Cards"

export default function CharacterCard(props) {
  const { name, status, species, gender, image } = props;
  return (
    <Card className="card">
      <div className="card-header">
        <h2>{name}</h2>
        <img src={image} alt=""/>
      </div>
      <div className="card-body">
        <table>
          <tbody>
            <tr>
              <td className="info-label">
                Status:
              </td>
              <td className="info-text">
                {status}
              </td>
            </tr>
            <tr>
              <td className="info-label">
                Gender:
              </td>
              <td className="info-text">
                {gender}
              </td>
            </tr>
            <tr>
              <td className="info-label">
                Species:
              </td>
              <td className="info-text">
                {species}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
}
