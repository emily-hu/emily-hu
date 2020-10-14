import React from 'react';
import '../css/Content.css';
import Card from './Card';

class Projects extends React.Component {
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
          <div>working on my <i>Masters of Engineering thesis</i></div>
        </div>
        <div className="cards">
          <Card onClick={this.select} id={0} imgid="xya-img" title="Project XYA"
            isActive={this.state.active===0}
            desc="VR escape room. You wake up in an unfamiliar place... yeah it's one of those."
            links={<div>See a <a href="https://youtu.be/6alKuRT0NOE" target="_blank" rel="noopener noreferrer">demo</a></div>}
            expand={<div>
                        I worked on this project for a semester with two teammates.
                        I learned to use Unity and VR at the same time,
                        which partially inspired my current masters project.
                    </div>
              }/>
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
    );
  }
}

export default Projects;
