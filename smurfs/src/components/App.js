import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import SmurfList from './SmurfList';
import SmurfContext from '../contexts/SmurfContext';

function App() {

  const [mainSmurfs, setMainSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        console.log(response);
        setMainSmurfs(response.data);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);

  const postNewSmurf = smurf => {
    const newSm = {
      id: Date.now(),
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    };
    axios
      .post(`http://localhost:3333/smurfs`, newSm )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("the data was not posted", error);
      });
  };

  return (
    <div>
      <SmurfContext.Provider value={{mainSmurfs, postNewSmurf}}>	
        <SmurfList/>
      </SmurfContext.Provider>	
    </div>
  );
}

export default App;
