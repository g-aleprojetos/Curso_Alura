import React, { Component } from "react";
import CardNota from "../cardNota/CardNota";
import "./style.css"

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("Tabalho", "Tabalho", "Estudos").map((categoria, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
