import React from 'react';
import Notification from '../components/Notification';
import apiManager from '../utils/api';

export default class SingUp extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      errorMessage: undefined,
      success: false
    };
  }

  async handleSubmit(e) {
    e.preventDefault();

    let errorMessage = {
      __html: ''
    };

    if(!this._username.value || !this._password1.value || !this._password2.value) {
      errorMessage.__html = 'Necesita rellenar todos los campos. ';
    }
    if(this._password1.value !== this._password2.value){
      errorMessage.__html += (errorMessage.__html ? '<br/>' : '') + 'Las contraseñas no coinciden. ';
    }

    if(errorMessage.__html){
      this.setState({
        errorMessage: errorMessage
      });
    } else {
      // Enviar
      console.log('enviar');
      apiManager.createUser(this._username.value, this._password1.value)
        .then((response) => {
          if(response.err){
            this.setState({
                errorMessage: {
                  __html: 'No se pudo guardar el usuario.<br/>Por favor, inténtelo de nuevo'
                }
            });
          } else {
            this.setState({
              success: true
            })
          }
        });
    }
  }

  render() {
    if(this.state.success){
      var succesText = {
        __html: "Ya puede iniciar sesión con el mismo <a href='/login'>aquí</a>"
      }
      return (
        <div className="Panel">
          <div className="Grid Grid--alignCenter">
            <div className="Grid-cell u-md-size6of12">
              <Notification type="success" heading="Usuario creado correctamente" text={succesText} icon="true"/>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Panel">
          <div className="Grid Grid--alignCenter">
            <div className="Grid-cell u-md-size6of12">
              <div className="Login">
                <div className="LoginForm">
                  <div>
                    {
                      this.state.errorMessage ?
                      <Notification type="error" text={this.state.errorMessage} icon="true"/> :
                      ''
                    }
                    <form className="Form" noValidate onSubmit={this.handleSubmit}>
                      <fieldset>
                        <div className="Form-group">
                          <label htmlFor="username" className="Form-label">Nombre de usuario</label>
                          <input type="username" name="username" id="username" className="Form-field" autoComplete="on"
                          ref={_username => { this._username = _username}} />
                        </div>
                        <div className="Form-group">
                          <label htmlFor="password" className="Form-label">Contraseña</label>
                          <input type="password" name="password" id="password" className="Form-field" autoComplete="off"
                          ref={_password1 => { this._password1 = _password1}} />
                        </div>
                        <div className="Form-group">
                          <label htmlFor="password" className="Form-label">Repetir Contraseña</label>
                          <input type="password" name="password2" id="password2" className="Form-field" autoComplete="off"
                          ref={_password2 => { this._password2 = _password2}}  />
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
      );
    }
  }
}
