import React, { useContext, useState } from "react";
import SmurfContext from '../contexts/SmurfContext';

const SmurfList = () => {
    const {mainSmurfs, postNewSmurf} = useContext(SmurfContext);
    
    const [newSmurfs, setNewSmurfs] = useState({ name: "", age: 0, height: "" });

    const submitForm = e => {
        // e.preventDefault();
        postNewSmurf(newSmurfs);
        //resetting form
        setNewSmurfs({ name: "", age: 0, height: "" });
    };

    const handleChanges = e => {
        setNewSmurfs({ ...newSmurfs, [e.target.name]: e.target.value });
      };
    

	return (
		<div>
            <h1>Smurfs</h1>
            <form onSubmit={submitForm}>>
                <input 
                placeholder = "enter name"
                id="name"
                type="text"
                name="name"
                onChange={handleChanges}
                value={newSmurfs.name} 
                />
                <input 
                placeholder = "enter age" 
                id="age"
                type="text"
                name="age"
                onChange={handleChanges}
                value={newSmurfs.age}
                />
                <input 
                placeholder = "enter height" 
                id="height"
                type="text"
                name="height"
                onChange={handleChanges}
                value={newSmurfs.height}
                />
                <button type="submit">submit</button>
            </form>

			{mainSmurfs.map(smurfy => (
            <div>
            <p>Name:{smurfy.name}</p>
            <p>Age:{smurfy.age}</p>
            <p>Height:{smurfy.height}</p>
            <br/>
            </div>		
			))}
		</div>
	);
};

export default SmurfList;