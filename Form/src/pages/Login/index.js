import React, { useState } from 'react';
import './Index.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    console.log(email);
    console.log(senha);
  }

  return (
    <section id="form" className="container">
      <div className="container icon">L</div>
      
      <fieldset>
        <form onSubmit={handleSubmit}>
          <input 
            className="foco" 
            type="email" 
            name="email" 
            id="email" 
            placeholder="E-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />
          <input 
            className="foco" 
            type="password" 
            name="senha" 
            id="senha" 
            placeholder="Senha"
            value={senha}
            onChange={event => setSenha(event.target.value)}
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
