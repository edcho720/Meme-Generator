import React, { useState } from "react"
import Header from './Header'
import Meme from "./Meme"
// import Counter from './Counter'
// import Comments from './Comments'
import boxData from "./BoxData"
import Box from "./Box"
import AddButton from './AddButton'
// import Form from "./Form"


export default function App() {

  const [squares, setSquares] = React.useState(boxData)

  function toggle(id) {

    setSquares(prevSquares => {
      return prevSquares.map( square => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }

  // function deleteBox(id) {
  //   setSquares(prevSquares => prevSquares.filter( (square) => {
  //     return square.id !== id && square
  //   })) probably doesn't work because of the toggle function altering boolean

function addSquare() {
  setSquares(prevSquares => [...prevSquares, {id: prevSquares.length+1, on: true}])
}

// function deleteSquare() {
// }



  const Boxes = squares.map( square => {
    return <Box 
              key={square.id}
              id={square.id}
              on={square.on}
              handleClick={toggle}
              // handleDoubleClick={deleteBox}
            />
  })

  const Button = <AddButton 
                    addSquare={addSquare} 
                    // deleteSquare={deleteSquare} 
                  />


  return (
    <>
      <Header />
      {/* <Form />
      {Boxes}
      {Button}
      <Counter />
      <Comments />*/}
      <Meme />
    </>
  );

};

