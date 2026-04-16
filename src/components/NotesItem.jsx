import React from "react";
import { getAllNotes } from "../utils/local-data";
import { showFormattedDate } from "../utils";

const notes = getAllNotes();

function NotesItem({ id, title, body, createdAt, archived }) {
    return (
            <div className="note-item">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>
            </div>
        )
        }
    
export default NotesItem;
