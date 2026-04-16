import React from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import NotesItem from "../components/NotesItem";
import { getArchivedNotes } from "../utils/local-data";
import Header from "../components/Header";


function ArchivedPage() {
    const [keyword, setKeyword] = React.useState('');
    const archivedNotes = getArchivedNotes();

    const filteredNotes = archivedNotes.filter((note) => note.title.toLocaleLowerCase().includes(keyword.toLowerCase()));

     const onKeywordChangeHandler = (event) => {
    setKeyword(event.target.value);
    };
    return (
        <div className="app-container">
            <Header />
            <main>
                <h2>Catatan Arsip</h2>
                <SearchBar keyword={keyword} onKeywordChange={onKeywordChangeHandler} />
                <NoteList notes={filteredNotes} />
            </main>
            
        </div>
    )
};

export default ArchivedPage;