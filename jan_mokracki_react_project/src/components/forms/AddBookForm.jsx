import {useRef} from 'react';
import React from 'react';

function AddBookForm(props) {
    const titleInputRef = useRef();
    const authorInputRef = useRef();
    const yearInputRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const title = titleInputRef.current.value;
        const author = authorInputRef.current.value;
        const year = yearInputRef.current.value;
        props.addBook(title, author, year);
    };
    
    return (
        <div className='addBook'>
            <h2>Add book</h2>
            <form id="addForm" onSubmit={handleSubmit}>
                <label htmlFor="TitleOfBookToAdd">Title of book to add:</label><br />
                <input type="text" id="TitleOfBookToAdd" name="TitleOfBookToAdd" required ref={titleInputRef}/><br />
                <label htmlFor="AuthorOfBookToAdd">Author of book to add:</label><br />
                <input type="text" id="AuthorOfBookToAdd" name="AuthorOfBookToAdd" required ref={authorInputRef}/><br /><br />
                <label htmlFor="YearOfBookToAdd">Year of book to add:</label><br />
                <input type="text" id="YearOfBookToAdd" name="YearOfBookToAdd" required ref={yearInputRef}/><br /><br />
                <input type="submit" value="Add"/>
            </form>
        </div>
    );
}

export default AddBookForm;