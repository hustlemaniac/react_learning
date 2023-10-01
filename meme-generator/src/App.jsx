import React from "react"
import Header from "./Components/Header.jsx";
import Meme from "./Components/Meme.jsx";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

  export default function App() {

    return(
      <div className="container">
        <Header />
        <Meme />
      </div>

    )
    }
