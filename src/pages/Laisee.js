import React, {useState, useContext} from 'react'
import '../assets/css/laisee.css';
import { ParticipantContext } from '../ParticipantContext';

export default function Laisee() { 

    const {participant, setParticipant} = useContext(ParticipantContext);
    const [prize, setPrize] = useState("")
    const [number, setNumber] = useState("");

    const getPrize = () => {
        let url = new URL('http://localhost:4000/prize');
        url.search = new URLSearchParams({
            username: participant,
        })

        fetch(url, {
            method: "GET",
            url: url,
        })
        .then(res => res.json())
        .then(data=>{
            setPrize(data.prize);
            if (data.number < 9){
                deletePrize(data.number)
            }
        })
    }

    const deletePrize = (number) => {
        fetch(`http://localhost:4000/delete`, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                number,
            }),
        });
    }

    return (
        <div>
             <div className="container">
                {!prize ? <button onClick={getPrize}></button> : <h2 className="prize">{prize}</h2>}
            </div>
        </div>
    )
}
