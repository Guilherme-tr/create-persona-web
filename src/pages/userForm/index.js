import React, { Component } from 'react';
import './style.css'
import {Link} from 'react-router-dom'

class UserForm extends Component{

  state ={
    nome: "Guilherme",
    email: "",
    cargo: "",
  }

  handleChange = ({target}) => {
    this.setState({[target.nome]: target.value})
  }

  render(){
    return (
      <div className="myContainer">
  
        <h2 className="header">Gerador de personas</h2>
        <h4 className="myControl">Queremos saber quem é você!</h4>
        <form className="myForm">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Qual o seu nome?</label>
            <input name="nome" onChange = {this.handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="Qual seu nome"></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Qual o seu email?</label>
            <input name="email" onChange = {this.handleChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Qual seu cargo?</label>
            <select name="cargo" onChange = {this.handleChange} className="form-control" id="exampleFormControlSelect1">
                <option>CEO</option>
                <option>Diretor</option>
                <option>Estudante</option>
                <option>Outros</option>
              </select>
          </div>
        </form>
        <footer className="mySpacingContainer">
          <Link to='/' type="submit" className="btn btn-primary btn-lg">Voltar</Link>
    <button type="submit" className="btn btn-primary btn-lg">Avançar</button>
        </footer>
    </div>
    );
  }
}
export default UserForm;
