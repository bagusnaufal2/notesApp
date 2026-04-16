import React from "react";
import { Link } from "react-router-dom";

function SearchBar({ keyword, onKeywordChange }) {
    return (
        <div className="search-bar">
            <input 
            
            type="text" 
            placeholder="Cari catatan dengan memasukan judul..."
            value={keyword}
            onChange={onKeywordChange} 
            />
        </div>
    )
};

export default SearchBar;

