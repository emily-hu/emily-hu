import React from 'react';
import '../css/Selectors.css';
import Selector from './Selector';
import Projects from './Projects';
import Interests from './Interests';
import Resume from './Resume';

class Selectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }
  select = (id) => {
    this.setState({active:id});
  }
  render() {
    return (
      <div className="content">
        <div className="row-items">
          <Selector text="Projects" id={0} isActive={this.state.active===0} onClick={this.select}/>
          <Selector text="Interests" id={1} isActive={this.state.active===1} onClick={this.select}/>
          <Selector text="Resume" id={2} isActive={this.state.active===2} onClick={this.select}/>
        </div>
        <div className="content2">
          {this.state.active === 0 && <Projects/>}
          {this.state.active === 1 && <Interests/>}
          {this.state.active === 2 && <Resume/>}
        </div>
      </div>
    )
  }
}

export default Selectors;
