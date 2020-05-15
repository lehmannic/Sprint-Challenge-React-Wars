// Write your Character component here
import React from "react"
import styled from "styled-components"

const StyledCharacter = styled.div`
    width: 22%; 
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: white;

    img {
        width: 75%; 
    }
`

export default function Character({ info }) {
    console.log(info)
    if (!info) return <h3> Gathering character info...</h3>
    return (
        <StyledCharacter className='characterContainer'>
            <h3>{info.name}</h3>
            <img src={info.image}></img>
        </StyledCharacter>
    )
}