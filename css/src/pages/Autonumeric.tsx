import React from 'react';
import AutoNumeric from 'autonumeric';

class Autonumeric extends React.Component {
  public componentDidMount() {
    console.log('ssss');
    const r = new AutoNumeric('#myinput');
    window.r = r;
  }

  public render() {
    return (
      <div className="autonumeric">
        <input type="text" id="myinput" />
      </div>
    );
  }
}
export default Autonumeric;
