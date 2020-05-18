import React from 'react';
import './Index.css';

function Login() {
  return (
    <section id="form" className="container">
      <div className="container icon">L</div>
      
      <fieldset>
        <form>
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
          <a href="./cadastro">Sign In</a>
        </div>
        <div className="right">
          <a href="#help">Help!</a>
        </div>
      </div>
    </section>
  );
}

export default Login;
