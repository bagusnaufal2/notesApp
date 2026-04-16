import React from "react";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import DetailPage from "../pages/DetailPage";

function NoteList({ notes }) {
    return (
        <div className="notes-list">
            {
            notes.map((note) => 
                <div className="note-item" key={note.id}>
                    <Link to={`/notes/${note.id}`}>
                        <h3 className="note-item__title">{note.title}</h3>
                    </Link>
                    <p className="note-item__createdAt">{showFormattedDate(note.createdAt)}</p>
                    <p className="note-item__body">{note.body}</p>
                </div>
            )}
        </div>
    )
}

export default NoteList;