import React from 'react'
import memesData from "./memesData"
import { useState } from 'react'

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name] : value
    }))
}


    // const [memeImage, setMemeImage ] = useState("http://i.imgflip.com/1bij.jpg");

    function getMemeImg() {

        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        let url = memesArray[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

  return (
    <main>
        <div className="form">

            <input 
            type="text" 
            placeholder="top" 
            className="input-box"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            />

            <input 
            type="text" 
            placeholder="bottom" 
            className="input-box"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            />

            <button 
            type="submit" 
            className="button"
            onClick={getMemeImg}
            >
                Get a new meme image  🖼
            </button>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            {/* <img src={memeImage} alt="push the button" width="200%"/> */}
        </div>
    </main>
  )

}

export default Meme