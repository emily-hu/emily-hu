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
            <div className="row-item">reading <a href="https://en.wikipedia.org/wiki/The_Dark_Forest" target="_blank" rel="noopener noreferrer">The Dark Forest</a></div>
            <div className="row-item">practicing <a href="https://www.youtube.com/watch?v=h-0G_FI61a8&t=4s" target="_blank" rel="noopener noreferrer">To Zanarkand</a> <i>(guitar)</i></div>
            <div className="row-item">learning <i>French, Japanese</i></div>
          </div>
          <div className="cards">
            <Card onClick={this.select} id={0} imgid="synco-img" title="A Cappella & Beatbox"
              isActive={this.state.active===0}
              desc=""
              links={<div>See some videos: <a href="https://youtu.be/mua4z4E9Er4" target="_blank" rel="noopener noreferrer">Boy With Luv</a>, <a href="https://youtu.be/D96LNK-pBaQ" target="_blank" rel="noopener noreferrer">Luv Shot</a></div>}
              expand={<div className="white-text">
                          During MIT, I was part of MIT Syncopasian, an a cappella group that sings songs in a mix of English and East Asian languages. I especially enjoyed recording group members in studio, and I also came to love setting up and mixing live sound for other a cappella groups' concerts. I still love to sing and beatbox.
                      </div>
                }/>
            <Card onClick={this.select} id={1} imgid="rambax-img" title="Senegalese Drumming"
              isActive={this.state.active===1}
              desc=""
              // links={<div>See some videos: <a href="https://www.youtube.com/watch?v=D96LNK-pBaQ" target="_blank" rel="noopener noreferrer">Luv Shot</a></div>}
              expand={<div className="white-text">
                          I joined MIT Rambax, a Senegalese drumming ensemble, as a junior. I love learning the rhythms and playing together as a group. 
                      </div>
                }/>
            <Card onClick={this.select} id={2} imgid="draw-img" title="Miscellaneous"
              isActive={this.state.active===2}
              desc=""
              links={<div>Examples on my <a href="https://www.instagram.com/mle.hu/" target="_blank" rel="noopener noreferrer">Instagram</a></div>}
              expand={<div className="white-text">
                          In my free time I like drawing people and playing guitar (learning some songs in fingerstyle).
                      </div>
                }/>
          </div>
        </div>
      </div>
    );
  }
}

export default Interests;
