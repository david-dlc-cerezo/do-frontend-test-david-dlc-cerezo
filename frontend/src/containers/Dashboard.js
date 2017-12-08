import React from 'react';
import {
  Redirect
} from 'react-router-dom';
export default ({ token }) => {
  if (!token) {
     return <Redirect to="/login" />
  }

  return (
    <div className="Panel">
      <div className="Grid Grid--alignCenter">
        <div className="Grid-cell u-md-size6of12">
          Dashboard
        </div>
      </div>
    </div>
  );
}
