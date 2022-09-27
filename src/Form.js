import React, { useState } from 'react'

function Form() {

    const [formData, setFormData] = React.useState(
        {
            username: "",
            password: "",
            subscribed: false
        }
    )

    function handleChange(event) {

        const {name, value, type, checked} = event.target

        setFormData(prevFormData => (
                {
                ...prevFormData, 
                [name] : type === "checkbox" ? checked : value
                }
            )
        )
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(formData.username === "eddiecho" && formData.password === "looniuni") {
            window.alert('Welcome back Eddie! Thanks for loggin in!')
        }

        if(formData.subscribed) window.alert("Thanks for signing up!")
    }

  return (

    <div>
        <form className="new-form" onSubmit={handleSubmit}>

            <label htmlFor='user'>User:</label>
            <input 
                id="user-input"
                type="text" 
                placeholder="enter username" 
                className="input-box" 
                name="username" 
                onChange={handleChange}
                value={formData.username}
                />
            
            <label htmlfor="password">Password:</label>
            <input 
                id="password-input"
                type="text" 
                placeholder="enter passwword" 
                className="input-box" 
                name="password" 
                onChange={handleChange}
                value={formData.password}
                />
            <label htmlfor="sign-up">Would you like to subscribe?</label>
            <input 
                id="sign-up"
                type="checkbox" 
                
                className="input-box" 
                name="subscribed" 
                onChange={handleChange}
                checked={formData.subscribed}
                />
            <button className="comment-button">Submit</button>
            </form>
    </div>

  )
}

export default Form

// Notes //

// import React from "react"

// export default function Form() {
//     const [formData, setFormData] = React.useState(
//         {
//             firstName: "", 
//             lastName: "", 
//             email: "", 
//             comments: "", 
//             isFriendly: true,
//             employment: "",
//             favColor: ""
//         }
//     )
    
//     function handleChange(event) {
//         const {name, value, type, checked} = event.target
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [name]: type === "checkbox" ? checked : value
//             }
//         })
//     }
    
//     function handleSubmit(event) {
//         event.preventDefault()
//         // submitToApi(formData)
//         console.log(formData)
//     }
    
//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 name="firstName"
//                 value={formData.firstName}
//             />
//             <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 name="lastName"
//                 value={formData.lastName}
//             />
//             <input
//                 type="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 name="email"
//                 value={formData.email}
//             />
//             <textarea 
//                 value={formData.comments}
//                 placeholder="Comments"
//                 onChange={handleChange}
//                 name="comments"
//             />
//             <input 
//                 type="checkbox" 
//                 id="isFriendly" 
//                 checked={formData.isFriendly}
//                 onChange={handleChange}
//                 name="isFriendly"
//             />
//             <label htmlFor="isFriendly">Are you friendly?</label>
//             <br />
//             <br />
            
//             <fieldset>
//                 <legend>Current employment status</legend>
//                 <input 
//                     type="radio"
//                     id="unemployed"
//                     name="employment"
//                     value="unemployed"
//                     checked={formData.employment === "unemployed"}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="unemployed">Unemployed</label>
//                 <br />
                
//                 <input 
//                     type="radio"
//                     id="part-time"
//                     name="employment"
//                     value="part-time"
//                     checked={formData.employment === "part-time"}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="part-time">Part-time</label>
//                 <br />
                
//                 <input 
//                     type="radio"
//                     id="full-time"
//                     name="employment"
//                     value="full-time"
//                     checked={formData.employment === "full-time"}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="full-time">Full-time</label>
//                 <br />
//             </fieldset>
//             <br />
            
//             <label htmlFor="favColor">What is your favorite color?</label>
//             <br />
//             <select 
//                 id="favColor" 
//                 value={formData.favColor}
//                 onChange={handleChange}
//                 name="favColor"
//             >
//                 <option value="red">Red</option>
//                 <option value="orange">Orange</option>
//                 <option value="yellow">Yellow</option>
//                 <option value="green">Green</option>
//                 <option value="blue">Blue</option>
//                 <option value="indigo">Indigo</option>
//                 <option value="violet">Violet</option>
//             </select>
//             <br />
//             <br />
//             <button>Submit</button>
//         </form>
//     )
// }
