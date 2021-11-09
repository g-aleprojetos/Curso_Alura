import React, { Component } from "react";
import "./style.css";

class ListaDeCategorias extends Component {

  _handlerEventoImput(e){
    if(e.key === "Enter"){
      console.log("categoria");
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          <li className="lista-categoria_item">Categorias</li>
          <li className="lista-categoria_item">Categorias</li>
          <li className="lista-categoria_item">Categorias</li>
          <li className="lista-categoria_item">Categorias</li>
        </ul>
        <input
          type="text"
          className="lista-categoria_imput"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handlerEventoImput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
