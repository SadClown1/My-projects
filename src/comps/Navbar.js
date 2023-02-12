import React from "react";
import image from "../images/Troll.png"


export default function Navbar(){
    return (
        <header className="header">
        <img 
            src={image} 
            className="header--image"
        />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Project</h4>
    </header>
    )
}