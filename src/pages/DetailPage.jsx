import React from "react";
import NoteList from "../components/NoteList";
import { showFormattedDate } from "../utils";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";
import Header from "../components/Header";
import { MdDelete } from "react-icons/md"
import { RiArchiveDrawerLine } from "react-icons/ri";

function DetailPage({ notes}) {
    const navigate = useNavigate();
    const { id } = useParams();
    const note = getNote(id);

    function onDeleteHandler() {
        alert("Delete note with id " + id);
        deleteNote(id);
        navigate('/')
    }

    function onArchiveHandler() {
        if (note.archived) {
            unarchiveNote(id);
            navigate('/')
        } else {
            archiveNote(id);
            navigate('/')
        }
    }

    return (
        <div className="app-container">
            <Header />
            <main>
            <div className="detail-page">
            <h1 className="detail-page__title">{note.title}</h1>
            <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
            <p className="detail-page__body">{note.body}</p>
            <div className="detail-page__action">
                <RiArchiveDrawerLine className="action" onClick={onArchiveHandler}>
                {note.archived ? "Pindahkan" : "Arsipkan"} /</RiArchiveDrawerLine>
                <MdDelete className="action" onClick={onDeleteHandler}/>
            </div>
            </div>
            </main>

        </div>
    )
}

export default DetailPage;