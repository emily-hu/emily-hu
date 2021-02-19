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
          <Card onClick={this.select} id={0} imgid="dance2music-img" title="Dance2Music"
            isActive={this.state.active===0}
            desc="A VR dance experience where the music changes based on how the dancer moves."
            links={<div><i>Demo to come</i></div>}
            expand={<div>
                        I designed and implemented Dance2Music from ideation to evaluation for my Masters of Engineering Thesis. I developed the system in Unity using C#, with Oculus and Wwise integrations. I created graphical assets (Blender, Photoshop) and audio assets (Musescore, Cakewalk). Through several rounds of user testing, I continually assessed and revised the system.
                    </div>
              }/>
          <Card onClick={this.select} id={1} imgid="visualive-img" title="Visualive"
            isActive={this.state.active===1}
            desc="Collaborative environment for exploring interactive data visualization."
            links={<div>See a <a href="https://youtu.be/gDmbAUAWrSM" target="_blank" rel="noopener noreferrer">demo</a></div>}
            expand={<div>
                        My teammate and I created this website using React and D3. In particular, we explored ways to represent other online users and their interactions with the same data in real time. For example, users might see each other selecting points in a scatter plot to focus on.
                    </div>
              }/>
          <Card onClick={this.select} id={2} imgid="xya-img" title="ProjectXYA"
            isActive={this.state.active===2}
            desc="VR escape room. You wake up in an unfamiliar place..."
            links={<div>See a <a href="https://youtu.be/6alKuRT0NOE" target="_blank" rel="noopener noreferrer">demo</a></div>}
            expand={<div>
                        I designed and built the game with two teammates, and I learned to use Unity and Oculus VR for the first time.
                        As fans of escape rooms, we determined that VR would be a great medium for creating one without needing to travel to a physical location. Discovering VR's immersiveness inspired me to continue exploring VR through my masters project.
                    </div>
              }/>
          <Card onClick={this.select} id={3} imgid="squarew-img" title="Square Wave"
            isActive={this.state.active===3}
            desc="2D musical puzzle platformer. Jump to the beat, fight enemies, collect keys."
            links={<div>See a <a href="https://vimeo.com/316577315" target="_blank" rel="noopener noreferrer">demo</a> <i>(starts at 3:43)</i></div>}
            expand={<div>
                        I designed and built this game with a teammate, using Python with the Kivy framework. Game logic, level design, and audio puzzles were among the components of the project where I learned the most and had the most fun.
                    </div>
              }/>
        </div>
      </div>
    );
  }
}

export default Projects;
