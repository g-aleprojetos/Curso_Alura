import React, { Component } from "react";
import CardNota from "../cardNota";
import "./style.css"

export class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((Nota, index) => {
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
