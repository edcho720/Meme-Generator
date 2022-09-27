import React from 'react'

export default function AddButton(props) {
  return (
    <div>
        <button 
        type="submit" 
        className="addSquare-button"
        onClick={props.addSquare}
        >Add</button>

        {/* <button 
        type="submit" 
        className="deleteSquare-button"
        onClick={props.deleteSquare}
        >Delete</button> */}

    </div> 
  )
}
