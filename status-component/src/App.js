import { useState } from 'react'
import { Note } from './modules/Note';
import './styles.css';

export const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  if (typeof notes === 'undefined' || notes.length === 0) {
    return <h1>No hay notas que mostrar!</h1>
  }

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    setNotes([...notes, noteToAddToState])
    setNewNote('')
  }

  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }

  return (
    <div>
      <h1>Notes</h1>

      <button onClick={handleShowAll}>
        {showAll ? 'Show only important' : 'Show all'}
      </button>

      <ol>
        {
          notes
            .filter(note => showAll ? true : note.important === true)
            .map((note) => {
              return (
                <Note key={note.id} {...note} />
              )
            })
        }
      </ol>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote} />
        <button>Crear notas</button>
      </form>
    </div>
  )
}