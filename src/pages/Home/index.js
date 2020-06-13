import React from 'react';
import './style.css'
import logo from './assets/logo.png'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <h2>Gerador de Personas</h2>
      <img className ="myImg" alt='foto princiapl' src={logo}></img>
      <h4>Empresas que documentam sua estratégia de Marketing de Conteúdo são 100% mais efetivas.</h4>
      <p>Uma persona é a representação do seu cliente típico, com todas as suas principais características e necessidades.</p>
      <Link to ="/user" className="btn btn-primary">Começar</Link>
    </div>
  );
}

export default Home;
