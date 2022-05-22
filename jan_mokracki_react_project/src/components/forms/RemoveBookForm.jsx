import {useRef} from 'react';
import React from 'react';

function RemoveForm(props) {
    
    const idInputRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const id = idInputRef.current.value;
        props.removeBook(id);
    };
    return (
        <div>
            <h2>Remove book</h2>
            <form id="removeForm" onSubmit={handleSubmit}>
                <label htmlFor="IdOfBookToRemove">Id of book to remove:</label><br />
                <input type="text" id="IdOfBookToRemove" name="IdOfBookToRemove" required ref={idInputRef}/><br />
                <input type="submit" value="Remove"/>
            </form>
        </div>
    );
}

export default RemoveForm;