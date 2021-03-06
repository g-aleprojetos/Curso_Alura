import React, { Component } from "react";
import "./style.css"

class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo="";
    this.texto="";
  }

  _handlerMudancaTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }
  _handlerMudancaTexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value;
  }
  _criarNota(evento){
    evento.stopPropagation();
    evento.preventDefault();  
    this.props.criarNota(this.titulo, this.texto);  
  }

  render() {
    return (
      <form className="form-cadastro"
      onSubmit={this._criarNota.bind(this)}>
        <input 
        type="text" 
        placeholder="titulo" 
        className="form-cadastro_input"
        onChange={this._handlerMudancaTitulo.bind(this)}
        />
        <textarea 
        rows={15}
        placeholder="Escreva sua nota..." 
        className="form-cadastro_input"
        onChange={this._handlerMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
          </button>
      </form>
    );
  }
}

export default FormularioCadastro;
