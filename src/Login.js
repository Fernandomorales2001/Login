import React from "react";

  const Login = (props) => {
      const{
          email,
          setEmail,
          password,
          setPassword,
          handleLogin,
          handleSignup,
          hasAccount,
          setHasAccount,
          emailError,
          passwordError,
      } = props;

      return (
      <section className="login">
      <div className="loginContainer">
      <label>Username</label>
      <input
      type="text"
      autoFocus
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <p className="errorMsg">{emailError}</p>
      <label>Username</label>
      <input
      type="password"
      autoFocus
      required
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <p className="errorMsg">{passwordError}</p>
      <div className="btnContainer">
          {hasAccount ? (
              <>
              <button onClick={handleLogin}>Iniciar Sesion</button>
              <p>
                  ¿No tienes una cuenta? 
                  <span onClick={() => setHasAccount(!hasAccount)}>Registrate</span></p>
              </>
           ) : (
            <>
            <button onClick={handleSignup}>Registrate</button>
            <p>
                ¿No tienes una cuenta? 
                <span>Iniciar Sesion</span></p>
            </>   
           )}
      </div>
      </div>
      </section>
      )
  };

  export default Login;