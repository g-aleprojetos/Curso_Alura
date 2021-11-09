import React, { Component } from "react";
import CardNota from "./cardNota/CardNota";

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Tabalho", "Tabalho", "Estudos").map((categoria, index) => {
          return (
            <li key={index}>
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
