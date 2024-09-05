import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NotesList from '../components/NoteCard/NoteList';
import './style.css'; 

function Home() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Ghi chú 1', content: 'Nội dung 1', date: '2017' },
    { id: 2, title: 'Ghi chú 2', content: 'Nội dung 2', date: '2018' }
  ]);

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleAddNote = (title, content, date) => {
    const newNote = {
      id: notes.length + 1,
      title: title || 'Ghi chú mới',
      content: content || 'Nội dung ghi chú mới',
      date: date || new Date().toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  };

  const handleEdit = (id) => {
    console.log(`Chỉnh sửa ghi chú có ID: ${id}`);
  };

  return (
    <div className="home-container">
      <Header />
      <button
        className="add-button"
        onClick={() => handleAddNote('Ghi chú mới', 'Nội dung mới', new Date().toLocaleDateString())}
      >
        Thêm ghi chú mới
      </button>
      <NotesList notes={notes} onDelete={handleDelete} onEdit={handleEdit} />
      <Footer />
    </div>
  );
}

export default Home;
