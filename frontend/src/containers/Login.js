import React from 'react';
import { Redirect } from 'react-router-dom';
import { postLogin } from '../utils/api/index';
import loggedUser from '../utils/loggedUser';
import Notification from '../components/Notification';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isThereLoginError: false
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { data, err } = await postLogin(this._username.value, this._password.value);
    if (err) {
      console.log(err);
      this.setState({
          isThereLoginError: true
      });
      return;
    }

    const { token } = data;

    // Store token in localstorage
    loggedUser.setToken(token);
    this.setState({
        isThereLoginError: false
    });
  }

  render() {
    // Redirect to Dashboard
    if(loggedUser.getToken()){
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div className="Grid Grid--alignCenter">
        <div className="Grid-cell u-md-size6of12">
          <div className="Login">
            <div className="LoginForm">
              <div>
                { this.state.isThereLoginError ? <Notification type="error" text="Credenciales no válidas" icon="true"/> : ''}
                <form className="Form" noValidate onSubmit={this.handleSubmit}>
                  <fieldset>
                    <div className="Form-group">
                      <label htmlFor="username" className="Form-label">Nombre de usuario</label>
                      <input
                        type="username"
                        name="username"
                        id="username"
                        className="Form-field"
                        autoComplete="on"
                        ref={_username => { this._username = _username}}
                      />
                    </div>
                    <div className="Form-group">
                      <label htmlFor="password" className="Form-label">Contraseña</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="Form-field"
                        autoComplete="off"
                        ref={_password => { this._password = _password}}
                      />
                    </div>
                    <button type="submit" name="button" className="Button Button--primary Button--medium Button--block">Entrar en tu cuenta</button>
                  </fieldset>
                </form>
                <p className="u-center u-divider-top"><a className="Button Button--link" href="/users/sign_up">¿Todavía no tienes cuenta? ¡Regístrate!</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
