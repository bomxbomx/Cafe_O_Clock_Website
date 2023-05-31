import React from 'react'

export const Contact = () => {
  return (
    <div id='contact'>
        <h1>BOOK YOUR TABLE</h1>
        <form>
            <input type='text' placeholder='Full Name'></input>
            <input type='email' placeholder='Type Your E-mail'></input>
            <textarea placeholder='Write Here.....'></textarea>
            <input type='submit' value='BOOK'></input>
        </form>
    </div>
  )
}
