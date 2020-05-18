import React from 'react';
import './Index.css';

function Cadastro() {
  return (
    <section id="form" className="container">
      <div className="container icon">R</div>
      
      <fieldset>
        <form>
          <input 
            className="foco" 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Nome" 
            required
          />
          <input 
            className="foco" 
            type="email" 
            name="email" 
            id="email" 
            placeholder="E-mail" 
            required
          />
          <input 
            className="foco" 
            type="password" 
            name="senha" 
            id="senha" 
            placeholder="Senha" 
            required
          />
          <input className="btn-submit" type="submit" value="Sign In"/>
        </form>
      </fieldset>

      <div className="container btns">
        <div className="left">
          <a href="./">Sign In</a>
        </div>
        <div className="right">
          <a href="#help">Help!</a>
        </div>
      </div>
    </section>
  );
}

export default Cadastro;
