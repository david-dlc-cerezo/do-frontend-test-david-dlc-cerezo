import React from 'react';
import classnames from 'classnames';

export default class Notification extends React.Component {
  constructor(){
    super();
    this.show = true;
    console.log(this);
  }

  render() {
    let notificationClasses = [
      'Notification',
      'Notification--alert',
      'Notification--' + this.props.type
    ];

    if (this.props.icon) {
      notificationClasses.push('Notification--icon');
    }

    return (
      <div className={classnames(notificationClasses)} role="alert">
        <div className="Notification-content">
          <p className="Notification-text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}
