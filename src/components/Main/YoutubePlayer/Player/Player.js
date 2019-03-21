import React, { Component } from "react";
import YouTube from 'react-youtube';

class App extends Component {

state = {
  offset: 0
}

componentDidUpdate(prevProps) {
  if(this.props.offset !== prevProps.offset) {
    const offset = parseInt(this.props.offset);
    this.setState({offset})
  }
}

  render() {
    
 
    const opts = {
        height: '340',
        width: '100%',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          start: this.state.offset
        },
      };
  
      return (
        <YouTube
          videoId={this.props.data}
          opts={opts}
          
          onReady={this._onReady}
        />
      );
  }
}

export default App;

