import { notes } from './db/notes';
import { Note } from './modules/Note';
import './styles.css';

export const App = () => {
  if (typeof notes === 'undefined' || notes.length === 0) {
    return <h1>No hay notas que mostrar!</h1>
  }

  return (
    <ol>
      {
        notes.map((note) => {
          return (
            <Note key={note.id} {...note} />
          )
        })
      }
    </ol>
  )
}