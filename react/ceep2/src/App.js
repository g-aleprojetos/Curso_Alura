import React, { Component } from "react";
import ListaDeNotas from "./components/listaDeNota";
import FormularioCadastro from "./components/formularioCadastro";
import ListaDeCategorias from "./components/listaDeCategorias";
import Categorias from "./dados/Categorias";
import ArrayNotas from "./dados/Notas";
import "./assets/App.css";
import "./assets/index.css";


class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias.categorias}
          criarNota={this.notas.criarNota}
        />
        <main className="conteudo-princial">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota}
            notas={this.notas.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
