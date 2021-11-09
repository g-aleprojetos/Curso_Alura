import React, { Component } from "react";
import ListaDeNotas from "./components/listaDeNota";
import FormularioCadastro from "./components/formularioCadastro";
import "./assets/App.css"
import './assets/index.css';

class App extends Component {
  
  constructor(){
    super();
    this.notas = [];
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    this.notas.push(novaNota);
  }
  render() {
    return (
      <section className= "conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.notas}/>
      </section>
    );
  }
}

export default App;
