import React, {useState} from 'react'
import '../assets/css/laisee.css';

export default function Laisee() {
    const [prize, setPrize] = useState("");

    const getPrize = () => {
        fetch(`http://localhost:4000/prize`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                prize,
            }),
        })
    }

    return (
        <div>
            <div className="container">
                <button onClick={getPrize}>This is laisee</button>
            </div>
        </div>
    )
}
