// Write your Character component here

import React from "react"

export default function Character({ info }) {
    if (!info) return <h3> Gathering character info...</h3>
    return (
        <div className='characterContainer'>
            <h3>{info.name}</h3>
            <img src={info.image}></img>
        </div>
    )
}