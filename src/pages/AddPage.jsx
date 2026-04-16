import React , { useState }from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { addNote } from "../utils/local-data";
import { use } from "react";
import { FaCheck } from "react-icons/fa";




function AddPage() {
const navigate = useNavigate();
const [title, setTitle] = useState('');
const [body, setBody] = useState('');

function onTitleChangeHandler(event) {
    setTitle(event.target.value);
}

function onBodyChangeHandler(event) {
    setBody(event.target.value);
}

function onSubmitHandler(event) {
    event.preventDefault();
    addNote({ title, body });
    navigate('/');
}

    return (
        <div className="app-container">
            <Header />
            <main>
                <form className="add-new-page__input" onSubmit={onSubmitHandler}>
                    <input
                    className="add-new-page__input__title"
                    type="text"
                    placeholder="Masukkan judul"
                    value={title}
                    onChange={onTitleChangeHandler}/>
                    <textarea
                    className="add-new-page__input__body"
                    placeholder="Masukkan pesan"
                    value={body}
                    onChange={onBodyChangeHandler} 
                    />
                    <div className="detail-page__action">
                    <button type="submit" className="action">
                        <FaCheck />
                    </button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default AddPage;