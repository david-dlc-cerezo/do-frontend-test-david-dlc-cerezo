import React from 'react';
export default () => (
  <div className="Panel">
    <div className="Grid Grid--alignCenter">
      <div className="Grid-cell u-md-size6of12">
        <div className="Login">
          <div className="LoginForm">
            <div>
              <form className="Form" noValidate>
                <fieldset>
                  <div className="Form-group">
                    <label htmlFor="username" className="Form-label">Nombre de usuario</label>
                    <input type="username" name="username" id="username" className="Form-field" autoComplete="on" />
                  </div>
                  <div className="Form-group">
                    <label htmlFor="password" className="Form-label">Contraseña</label>
                    <input type="password" name="password" id="password" className="Form-field" autoComplete="off" />
                  </div>
                  <div className="Form-group">
                    <label htmlFor="password" className="Form-label">Repetir Contraseña</label>
                    <input type="password" name="password" id="password" className="Form-field" autoComplete="off" />
                  </div>
                  <button type="submit" name="button" className="Button Button--primary Button--medium Button--block">Enviar</button>
                </fieldset>
              </form>
              <p className="u-center u-divider-top"><a className="Button Button--link" href="/login">¿Ya tienes cuenta? Entra</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
