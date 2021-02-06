import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import '../assets/css/register.css'

export default function Register() {
    const [username, setUsename] = useState("");
    const [error, setError] = useState("");

    const handleErrors = async (response) => {
        if (!response .ok){

            const {message} = await response.json();
            throw Error(message);
              
        }
        return response.json();
    }

    const login  = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4000/register`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                username,
            }),
        })
        .then(handleErrors)
        .then(()=>{
            history.push("/laisee")
        })
        .catch((error)=>{
            console.log("we are here", error) 
            setError(error.message);
        })
    };

    const history = useHistory();

    return (
        <div className="container">
            <div className="center">
                <h1 className="title">
                    ACS' Lunar New Year Red Envelope Event
                </h1>
                {error && (<span style={{color: 'red'}}>{error}</span>)}
                <form onSubmit={login}>
                <input onChange={(e)=>{setUsename(e.target.value)}} type="text" name="name" className="question" id="nme" required autoComplete="off" />
                    <label htmlFor="nme">
                        <span >Enter your RIT username</span>
                    </label>
                    <input type="submit" value="Submit!" />
                </form>
            </div>
        </div>
    )
}
