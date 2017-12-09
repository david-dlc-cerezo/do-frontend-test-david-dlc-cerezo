import React from 'react';
import classnames from 'classnames';

export default class Notification extends React.Component {
  render() {
    let classes = {
      notification: [
        'Notification',
        'Notification--alert',
        'Notification--' + this.props.type
      ],
      heading: [
        'Notification-heading'
      ]
    };

    if (this.props.icon) {
      if(this.props.heading){
        classes.heading.push('Notification-heading--icon');
      } else {
        classes.notification.push('Notification--icon');
      }
    }

    return (
      <div className={classnames(classes.notification)} role="alert">
        <div className="Notification-content">
          {
            this.props.heading ?
            <h3 className={classnames(classes.heading)}>{this.props.heading}</h3> :
            ''
          }
          {
            this.props.text.__html ?
            <p className="Notification-text" dangerouslySetInnerHTML={this.props.text}></p> :
            <p className="Notification-text">{this.props.text}</p>
          }
        </div>
      </div>
    );
  }
}
