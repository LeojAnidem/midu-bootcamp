import { useState, useEffect } from 'react'
import axios from 'axios'
import { Note } from './modules/Note';
import './styles.css';

export const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      const {data} = res
      setNotes(data)
      setLoading(false)
    })
  }, [])
  
  const haveNotes = typeof notes !== 'undefined' && notes.length > 0
  if ( !haveNotes && !loading )
    return <h1>No hay notas que mostrar!</h1>
  
  const handleChange = (event) => setNewNote(event.target.value)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    
    const noteToAddToState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote,
      // date: new Date().toISOString(),
      // important: Math.random() < 0.5
    }

    setNotes([...notes, noteToAddToState])
    setNewNote('')
  }
  
  const handleShowAll = () => setShowAll(() => !showAll)
  
  return (
    <div>
      <h1>Notes</h1>

      { loading ? 'Cargando...' : '' }

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