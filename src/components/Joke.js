import React from "react"

function Joke(props){
    return(
        <div>
            <h2>Joke</h2>
            <p style={{display: props.question?"block":"none"}}>{`The question is ${props.question}`}</p>
            <p>{`answer : ${props.joke}`}</p>
        </div>
    )
}

export default Joke
