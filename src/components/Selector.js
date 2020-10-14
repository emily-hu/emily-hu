import React from 'react';
import '../css/Selectors.css';

class Selector extends React.Component {
  select = () => this.props.onClick(this.props.id);

  render() {
    return (
      <div id={"select-" + this.props.id} onClick={this.select}
          className={"selector" + (this.props.isActive ? " selected" : "")}>
        <div className="circle">
          <div className="header2">{this.props.text}</div>
        </div>
      </div>
    );
  }
}

export default Selector;
