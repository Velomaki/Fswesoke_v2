import React from 'react'
//import noteService from './services/persons'

const Note = ({ note }) => {
  return (
    <li>{note.name} {note.number} </li>
  )
}

export default Note