import React, { Component } from 'react';
import AddEmployee from "./employee_crud";
// import logo from '../img/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.css";
import '../css/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setMovies : [
                  {
                    name:'Billions',
                    genre: 'Drama',
                    starring: 'Damian Lewis, Paul Giamatt',
                  },
                  {
                    name:'Sarafina',
                    genre: 'drama',
                    starring: 'Leleti Khumalo',
                  },

                ],
            movies : []
        }
    }


    render() {
        return (<AddEmployee/>)
    return (
    <div className="App">
      {/* const {movies} = movies */}


      {this.state.setMovies.map((movie, index) => {
        return(
          <div className="movies">
            <h2>{movie.name}</h2>
            <h3>{movie.genre}</h3>
            <h4>{movie.starring}</h4>
          </div>
        )
      }
      )}
    </div>
    );
  }
}

export default App;
