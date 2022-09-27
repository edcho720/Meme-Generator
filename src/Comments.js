import React, { useState } from 'react'

function Comments() {

    const [comment, setComment] = React.useState(["Thing 1"]);

    function addComment() {
        setComment(prevComment => [...prevComment, `Thing ${prevComment.length + 1}`])
    }
    
    const comments = comment.map( each => {
        return <p>{each}</p>
    })

  return (

    <div className="comments-box">
        {/* <form>
            <label htmlFor='comments'>Submit comment</label>
            <input 
            id="comments"
            type='text' 
            placeholder='enter new comment...' 
            className="input-box2"

            />
            <button className="comment-button" onClick={addComment}>Submit</button>
        </form>
        <br />
        <br />
        <br />
        <br /> */}
        <button className="comment-button" onClick={addComment}>Add Thing</button>
        <div className="each-comment">
            {comments}
        </div>
    </div>

  )
}

export default Comments