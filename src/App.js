import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import "./App.css"
import {originals, action, romancemovies, horrormovies, comedymovies } from './urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={romancemovies} title='Romance' isSmall/>
      <RowPost url={horrormovies} title='Horror' isSmall/>
      <RowPost url={comedymovies} title='Comedy' isSmall/>
    </div>
  );
}

export default App;
