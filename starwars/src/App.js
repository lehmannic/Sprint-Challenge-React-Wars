import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import {BASE_URL} from './constants'

import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charactersInfo, setCharactersInfo] = useState([]); 

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then(response => {
        console.log(response)
        console.log(response.data.info.count)
        setCharactersInfo(response.data)
      })
      .catch(error => {
        console.log(`could not fetch all characters`)
        debugger
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <></>
      <Character info={charactersInfo} />
      
    </div>
  );
}

export default App;
