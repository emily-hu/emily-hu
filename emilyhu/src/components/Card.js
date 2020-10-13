import React from 'react';
import '../css/Content.css';

class Card extends React.Component {
  select = () => this.props.onClick(this.props.id);
  render() {
    return (
      <div className={"card" + (this.props.isActive ? " active" : "")} onClick={this.select}>
        <div id={this.props.imgid} className="card-bg">
          <div className="header-overlay">
              <div className="header2">{this.props.title}</div>
              <div className="desc nested">{this.props.desc}</div>
              <div className={this.props.isActive ? "expanded" : "minimized"}>{this.props.links}</div>
          </div>
          <div className={"more nested" + (this.props.isActive ? " expanded" : " minimized")}>
              {this.props.expand}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
