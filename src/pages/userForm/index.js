import React, { Component } from 'react';
import './style.css'
import {Link} from 'react-router-dom'

class UserForm extends Component{
  render(){
    return (
      <div className="myContainer">
  
        <h2 className="header">Gerador de personas</h2>
        <h4 className="myControl">Queremos saber quem é você!</h4>
        <form className="myForm">
          <div class="form-group">
            <label for="exampleInputEmail1">Qual o seu nome?</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="Qual seu nome"></input>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Qual o seu email?</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Qual seu cargo?</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>CEO</option>
                <option>Diretor</option>
                <option>Estudante</option>
                <option>Outros</option>
              </select>
          </div>
        </form>
        <footer className="mySpacingContainer">
          <Link to='/' type="submit" class="btn btn-primary btn-lg">Voltar</Link>
          <Link type="submit" class="btn btn-primary btn-lg">Avançar</Link>
        </footer>
    </div>
    );
  }
}
export default UserForm;
