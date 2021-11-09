import React, { Component } from "react";
import ListaDeNotas from "./components/listaDeNota";
import FormularioCadastro from "./components/formularioCadastro";
import "./assets/App.css"
import './assets/index.css';

class App extends Component {
  criarNota(titulo, texto){
    console.log(`Uma nota foi criada `+ titulo +` ` + texto);
  }
  render() {
    return (
      <section className= "conteudo">
        <FormularioCadastro criarNota={this.criarNota}/>
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
