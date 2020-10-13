import React from 'react';
import '../css/Content.css';
import Card from './Card';

class Interests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: -1,
    };
  }
  select = (id) => {
    if (id === this.state.active) {
      this.setState({active:-1});
    } else {
      this.setState({active:id});
    }
  }
  render() {
    return (
      <div className="content2">
        <div>
          <div>Currently I am...</div>
          <br></br>
          <div className="row-items">
            <div className="row-item">playing <a href="http://www.okami-game.com/" target="_blank" rel="noopener noreferrer">Okami</a></div>
            <div className="row-item">reading <a href="https://en.wikipedia.org/wiki/The_Three-Body_Problem_(novel)" target="_blank" rel="noopener noreferrer">The Three Body Problem</a></div>
            <div className="row-item">learning <i>French</i></div>
          </div>
          <div className="cards">
            <Card onClick={this.select} id={1} imgid="xya-img" title="Project XYA"
              isActive={this.state.active===1}
              desc="VR escape room. You wake up in an unfamiliar place... yeah it's one of those."
              links={<div>See a <a href="https://youtu.be/6alKuRT0NOE" target="_blank" rel="noopener noreferrer">demo</a></div>}
              expand={<div>
                          I worked on this project for a semester with two teammates.
                          I learned to use Unity and VR at the same time,
                          which partially inspired my current masters project.
                      </div>
                }/>
          </div>
        </div>
      </div>
    );
  }
}

export default Interests;
