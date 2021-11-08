import React, { Component } from "react";
import CardNota from "./CardNota";

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Tabalho", "Tabalho", "Estudos").map((categoria) => {
          return (
            <li>
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
