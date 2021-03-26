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
        <h3>// track name will go here </h3>
        <p>// track artist will go here |  track album will go here</p>
      </div>
      <button className="Track-action">{button}</button>
    </div>;
    }
  }


export default Track