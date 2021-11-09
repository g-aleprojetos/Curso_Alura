import React, { Component } from "react";
import "./style.css"

class FormularioCadastro extends Component {

  constructor(){
    super();
    this.titulo="";
  }

  handlerMudancaTitulo(evento){
    this.titulo = evento.target.value
  }

  render() {
    return (
      <form className="form-cadastro">
        <input 
        type="text" 
        placeholder="titulo" 
        className="form-cadastro_input"
        onChange={this.handlerMudancaTitulo}
        />
        <textarea 
        rows={15}
        placeholder="Escreva sua nota..." 
        className="form-cadastro_input"
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
          </button>
      </form>
    );
  }
}

export default FormularioCadastro;
