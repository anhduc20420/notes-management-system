import React from 'react';
import NoteCard from './NoteCard';

function NoteList({notes,oneDelete,onEdit}) {
  return (
    <div style={styles.container}>
      {notes.map(note=>(
        <NoteCard key={note.id} note={note} onDelete={oneDelete} onEdit={onEdit} />
      ))}

    </div>
  )
}
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};
export default NoteList