import React, { useState } from 'react'


function Counter() {

    const [count, setCount] = useState(0);

    function addOne() {
        setCount(prevCount => prevCount + 1)
    };

    function subtractOne() {
        setCount(prevCount => prevCount - 1)
    };


  return (

    <div className="counter-box">
        <button className="minus" onClick={subtractOne}>-</button>
        <div className={count < 0 ? "counter-display-alt" : "counter-display"}>{count}</div>
        <button className ="plus" onClick={addOne}>+</button>
    </div>



  )
}

export default Counter

