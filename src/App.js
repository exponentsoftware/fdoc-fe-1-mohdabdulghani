import logo from './logo.svg';
import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Album from './Components/Album'
import Albums from './Components/Albums'
import Nav from './Components/Nav'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [
        {id: 1, artist: "Ariit singh", album_title: "Tum hi ho", album_cover: "Arijit singh", songs: "Sound Track1",img:"https://www.india.com/wp-content/uploads/2013/12/tum-hi-ho-aashiqui2.jpg"},
        {id: 2, artist: "Atif aslam", album_title: "Kun Faya Kun", album_cover: "Atif Aslam", songs: "Qawwali",img:"https://i.ytimg.com/vi/XuKmrzrUxYw/hqdefault.jpg"},
        {id: 3, artist: "jayshree", album_title: "Zara Zara", album_cover: "Music Dhavan", songs: "Sound Track3",img:"https://i.ytimg.com/vi/0Jj9rOwkfLM/hqdefault.jpg"},
        
      ],
      errorMsg: ''
    }
  }
  render(){
  return (
    <div className="App">
      <Nav />
        <div className="container">
          <div className="row">
            <Album />
          </div>
          <div className="row">
            <div className="col-sm-3">
            <Albums albums={this.state.albums} />
            </div>
           
          </div>
        </div>
    </div>
  );
}
}
export default App;
