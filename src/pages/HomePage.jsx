import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import NotesItem from '../components/NotesItem';
import NoteList from '../components/NoteList';
import { getActiveNotes } from '../utils/local-data';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";



function HomePage() {
  const [keyword, setKeyword] = useState('');
  const notes = getActiveNotes();

  const filteredNotes = notes.filter((note) => note.title.toLocaleLowerCase().includes(keyword.toLowerCase()));

  const onKeywordChangeHandler = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <h2>Catatan Aktif</h2>
      <SearchBar keyword={keyword} onKeywordChange={onKeywordChangeHandler}/>
      <NoteList notes={filteredNotes} />
      <div className="detail-page__action">
      <Link to="/notes/new"><FaPlus className='action'/></Link>
      </div>
      </main>
    </div>
  );
}

export default HomePage;
