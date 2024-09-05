import React from 'react'

function NoteCard({note,onDelete,onEdit}) {
  return (
    <div style={styles.card}>
        <h2>{note.title}</h2>
        <p>{note.date}</p>
        <p>{note.content}</p>
        <div style={styles.actions}>
            <button style={styles.editButton} onClick={()=>onEdit(note.id)}>Sửa</button>
            <button style={styles.deleteButton} onClick={()=>onDelete(note.id)}>Xóa</button>

        </div>
    </div>
  )
};

const styles = {
    card: {
        backgroundColor: '#fff',
        padding: '20px',
        margin: '10px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '300px',
      },
      actions: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px',
      },
      editButton: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '8px 12px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      },
      deleteButton: {
        backgroundColor: '#F44336',
        color: 'white',
        padding: '8px 12px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      },
}


export default NoteCard