import React, {useState, useContext} from 'react'
import '../assets/css/laisee.css';
import { ParticipantContext } from '../ParticipantContext';
import Confetti from 'react-dom-confetti';

export default function Laisee() { 

    const config = {
        angle: 90,
        spread: "25",
        startVelocity: "52",
        elementCount: "50",
        dragFriction: 0.12,
        duration: "2500",
        stagger: 3,
        width: "13px",
        height: "11px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
      };


    const {participant, setParticipant} = useContext(ParticipantContext);
    const [prize, setPrize] = useState("")
    const [number, setNumber] = useState("");
    const [completed, setCompleted] = useState(false);

    const getPrize = () => {
        let url = new URL('https://acslunarnewyear.herokuapp.com/prize');
        url.search = new URLSearchParams({
            username: participant,
        })

        fetch(url, {
            method: "GET",
            url: url,
        })
        .then(res => res.json())
        .then(data=>{
            setCompleted(true);
            setPrize(data.prize);
            if (data.number < 24){
                deletePrize(data.number)
            }
        });

    }

    const deletePrize = (number) => {
        fetch(`https://acslunarnewyear.herokuapp.com/delete`, {
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
                {!prize ? <button onClick={getPrize}></button> : <h2 className="prize">{prize}</h2>}\
                <div className="confetti"><Confetti active={completed} config = {config}/></div>
            </div>
        </div>
    )
}
