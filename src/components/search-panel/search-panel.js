import React, { useState } from 'react';
import "./search-panel";


const SearchPanel = ({onUpdateSearch}) => {
    const [ term, setTerm ] = useState('');

    const refreshSearch = (e) => {
        let term = e.target.value;
        setTerm(term);
        onUpdateSearch(term);
    }

    return (
        <>
            <input 
                className = "form-control search-input"
                type = "text"
                placeholder = "Поиск по записям"
                onChange={refreshSearch}
            />
        </>
    )
}

export default SearchPanel;