import React, { useState } from 'react'
import axios from "axios"

function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pan, setPan] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [mobile, setMobile] = useState('');
    const [occupation, setOccupation] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, pan,aadhar, mobile,occupation);
        
        var user = {
          name: name,
          email :email,
          pan : pan,
          aadhar : aadhar,
          mobile : mobile,
          occupation : occupation
      }

          axios
            .post("http://localhost:3001/add-user", user)
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      }

    return (
        <form onSubmit={handleSubmit}>
            Name: <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
            Email: <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}  />
            PAN: <input type="text" name="pan" value={pan} onChange={e => setPan(e.target.value)} />
            Aadhar: <input type="text" name="aadhar" value={aadhar} onChange={e => setAadhar(e.target.value)}/>
            Mobie No: <input type="number" name="mobileno" value={mobile} onChange={e => setMobile(e.target.value)}/>
            Occupation <input type="text" name="occupation" value={occupation} onChange={e => setOccupation(e.target.value)} />
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Home
