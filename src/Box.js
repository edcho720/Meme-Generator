import React from 'react'

function box(props) {

const styles = props.on ? "box-style" : "box-style-alt"

  return (
    <div 
    className={styles}
    on={props.on}
    onClick={() => props.handleClick(props.id)}
    // onDoubleClick={() => props.handleDoubleClick(props.id)}
    >
    
    </div>
  )
}

export default box