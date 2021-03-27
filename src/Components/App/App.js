import logo from './logo.svg';
import './App.css';
import '/Users/Asus/jamming/src/Components/Playlist/Playlist.js';
import '/Components/SearchBar/SearchBar.js';
import '/Components/SearchResults/SearchResults.js';
import { render } from '@testing-library/react';
import React from 'react';  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchResults: [name, artist, album, id]}
  }
  
  
  render() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    // Add a SearchBar component
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults}/>
    // Add a Playlist component
    </div>
  </div>
</div>

  

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
