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
        {id: 1, artist: "Vijay T", album_title: "Master", album_cover: "Music Anirudh R", songs: "Sound Track1",img:"https://th.bing.com/th/id/OIP.PG890d22ZaRLFfurF5o4rwAAAA?w=125&h=180&c=7&o=5&dpr=1.5&pid=1.7"},
        {id: 2, artist: "Naveen Polishetty", album_title: "Jathirathnalu", album_cover: "Music Radhan", songs: "Sound Track2",img:"https://th.bing.com/th/id/OIP.UfqMH8JseiJlHF9HpsjVywHaHI?w=217&h=209&c=7&o=5&dpr=1.5&pid=1.7"},
        {id: 3, artist: "Suriya", album_title: "Aakasam Nee Haddura", album_cover: "Music G. V. Prakash", songs: "Sound Track3",img:"https://th.bing.com/th/id/OIP.dqgZ9Xht3MKl8yHDrUpCbgHaGU?w=208&h=180&c=7&o=5&dpr=1.5&pid=1.7"},
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
