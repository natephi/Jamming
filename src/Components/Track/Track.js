import React from 'react';
import './Track.css';


class Track extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isRemoval: true};
    }


    
    render() {

        const isRemoval = this.state.isRemoval;
let button;
if (isRemoval) {
    button = '-';
} else {
    button = '+';
}


      return <div className="Track">
      <div className="Track-information">
        <h3>{this.props.track.name} </h3>
        <p>{this.props.track.artist} |  {this.props.track.album}</p>
      </div>
      <button className="Track-action">{button}</button>
    </div>;
    }
  }


export default Track